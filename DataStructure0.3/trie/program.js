class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    endsWith(suffix) {
        let node = this.root;
        for (let i = suffix.length - 1; i >= 0; i--) {
            const char = suffix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

const suffixTrie = new Trie();
suffixTrie.insert("apple");
console.log(suffixTrie.search("elppa"));      // Output: true
console.log(suffixTrie.endsWith("elp")); // Output: true

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app"));     // Output: true