const mergeTwoLists = (list1, list2) => {
    let result = [];
    const helper = (index1, index2) => {
       if(index1 === list1.length) {
            result.push(...list2.slice(index2));
            return;
       }
       if(index2 === list2.length) {
            result.push(...list1.slice(index1));
            return;
       }

       if(list1[index1] <=list2[index2]) {
            result.push(list1[index1]);
            return helper(index1+1, index2);
       }
       else {
            result.push(list2[index2]);
            return helper(index1, index2+1);
       }
    }
    helper(0,0);
    return result;
};

console.log(mergeTwoLists( [1,2,4], [1,3,4]));