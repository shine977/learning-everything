/* 
如何判断一个字符串是弱、中、还是强呢？
数字、字母(大写)、特殊符号
如果我们的字符串包含上述三种以上，强
如果我们的字符串包含上述其中二种，弱
如果我们的字符串只包含一种，弱
另外字符串的长度

如果是数字 0001表示 48-57
如果是小写字母, 0010表示 97-122
如果是大写字母, 0100表示 65-90
如果是特殊字符, 1000表示 期他

示例:
1234: 0001 | 0001 | 0001 |0001 --> 1
abcd: 0010 | 0010 | 0010 | 0010 -> 2
ABCD: 0100 | 01011 | 0100 | 0100 -> 4
@!_$: 1000|1000|1000|1000 -> 8

12ab: 0001|0001 |0010|0010 0011 ->3
12Ab: 0001|0001 |0100|0010 0111 ->7
1_Ab: 0001|0001 |0100|0010 1111 ->15

循环4次，每次和1做位于的操作。如果得到的为真,那么强度等级+1,否则不加.没循环一次，需要移位操作

abdc: 0010
第一次： 0010 & 1 = 0; level = 0;右移一位 0001
第二次: 0001 & 1 = 1; levle + 1 =1;右移一位 0000
第三次: 0000 & 1 = 0; levle =1;右移一位, 0000
第四次: 0000 & 1 = 0; levle =1;右移一位, 0000
整体是level = 1,是弱密码
*/

function charType(num) {
    if (num >= 48 && num <= 57) {
        return 1;
    }
    if (num >= 65 && num <= 90) {
        return 2;
    }
    if (num >= 97 && num <= 122) {
        return 4;
    }
    return 8;
}
var str = 'abdce123'
for (var i = 0, len = str.length; i < len; i++) {
    charType(str.charCodeAt(i))
}