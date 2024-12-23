function MySet() {
    this.length=0;
    this.items = []; // 使用对象来存储集合元素，键名为元素，值为 true（元素存在于集合中）
}

MySet.prototype={
    add : function (element) {
        if (!this.has(element)) {
            this.items.push(element);
            this.length++;
        }
    },
    delete : function (element) {
        if (this.has(element)) {
            this.items.splice(this.items.indexOf(element), 1);
            this.length--;
        }
    },
    has : function (element) {
        // console.log(element)
        var enter = this.values();
        if (enter.indexOf(element)>-1) {
            return true;
        }else {
            return false;
        }
    },
    clear : function () {
        this.items = [];
    },
    size : function () {
        return this.length;
    },
    values : function () {
        return this.items;
    },
};













// 返回两个集合的并集
MySet.prototype.union = function (otherSet) {
    const unionSet = new MySet();

    // 把当前集合的所有元素加入到新的集合
    this.values().forEach(item => unionSet.add(item));
    // 把另一个集合的所有元素加入到新的集合
    otherSet.values().forEach(item => unionSet.add(item));

    return unionSet;
};

// 返回两个集合的交集
MySet.prototype.intersection = function (otherSet) {
    const intersectionSet = new MySet();

    this.values().forEach(item => {
        if (otherSet.has(item)) {
            intersectionSet.add(item);
        }
    });

    return intersectionSet;
};

// 返回当前集合相对于另一个集合的差集
MySet.prototype.difference = function (otherSet) {
    const differenceSet = new MySet();

    this.values().forEach(item => {
        if (!otherSet.has(item)) {
            differenceSet.add(item);
        }
    });

    return differenceSet;
};

// 返回当前集合是否是另一个集合的子集
MySet.prototype.subset = function (otherSet) {
    return this.values().every(item => otherSet.has(item));
};

// 示例用法：
const set1 = new MySet();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1.values()); // [1, 2, 3]

const set2 = new MySet();
set2.add(2);
set2.add(3);
set2.add(4);
console.log(set2.values()); // [2, 3, 4]

// 并集
const unionSet = set1.union(set2);
console.log(unionSet.values()); // [1, 2, 3, 4]

// 交集
const intersectionSet = set1.intersection(set2);
console.log(intersectionSet.values()); // [2, 3]

// 差集
const differenceSet = set1.difference(set2);
console.log(differenceSet.values()); // [1]

// 子集
const isSubset = set1.subset(set2);
console.log(isSubset); // false
