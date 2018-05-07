// es6  class关键字新增
class RandomHongbao{
    constructor(num){
        // check 
        this.num=this.getNum(num);
        // 得到一个确定的小树的位数
        // 120 120.1 1223.2313
        try {
            // 数值的小数长度
            this.multiple = this.num.toString().split('.')[1].length;
        } catch (e) {
            this.multiple=0;
        }
        //将小数放大指数倍成整数
        this.calcNum = this.num * Math.pow(10,this.multiple);//10的this.multiple字方
        console.log(this.calcNum);
        
        console.log(this.num.toString());
    }
    split(n,precision){
        // this.num原金额
        // this.calcNum如果小数放大的金额
        // 偷偷的先等分一下 n是人数
        let arr = this.avg(n, precision);
        console.log(arr);
        // 随机性   三人同行为一个单位，产生几次随机，把钱分给左右的人，环状，数据结构（链表）
        let arrResult = arr;
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let num = Math.floor(Math.random()*arr[i]);
            let numLeft = Math.floor(Math.random()*num);
            let numRight = num - numLeft;
            arrResult[i] -= num;
            let iLeft = i === 0 ? (arr.length - 1) : i - 1;
            let iRight = i === (arr.length-1) ?  0 : i + 1;
            arrResult[iLeft] += numLeft;
            arrResult[iRight] += numRight;
        }
        return arrResult;
    }
    getNum(num,defaultNum=0){
        return this.isNumber(num) ? num : defaultNum;
    }
    isNumber(num){
        // 各种可能出问题的，排除
        let number = +num; //加个+号表示number化  一定会是一个数字
        if ((number - num) !== 0) {
            return false;
        }
        if (number === num) {
            return true;
        }
        // console.log(typeof number);
        if (typeof num === 'string') {
            return false;
        }
        return true;
    }
    avg(n, precision){
        let avg = Math.floor(this.calcNum/n);
        let rest = this.calcNum % n;//求余数
        console.log(rest);
        let result = Array(n).fill(avg)  //创造一个n个数组
        let gap = Math.round((n-rest)/rest) + 1;  //多余的钱填充的间隔问题
        let index = 0;
        while (rest > 0) {
            index = (--rest) * gap; //哪个位置多拿一块钱
            result[index >= n ? (n-1):index]++;
        }
        // 怎么将有的rest 平分的数组里给掉  ===>  把多的钱，一块一块去分 rest--
        // 放大后的平均值，回到放大之前，金额没问题
        return result.map( (item) => {
            return (item / Math.pow(10,this.multiple));
        })
    }
}
// 200 => 总金额
// split 26 人数
// 2代表分配的精确度 0.01
const hongbao = new RandomHongbao(200);
console.log(hongbao.split(10,0));