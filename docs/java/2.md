# 自己实现String转Integer

>**要点**：通过字符在unicode中的排序位置求得字符对应的Int值

>若字符`x`在unicode表中的排序位置为50，已知0的排序位置为48

>则，`x=50-48=2`,即`x`就是阿拉伯数字2

```
    /**
     * 自己实现String转Integer
     * @param strInput
     * @return
     */
    private static Integer parseInt(String strInput) {

        // 若包含小数点，则仅保留小数点前的字符串
        strInput = strInput.indexOf(".") >= 0 ? strInput.substring(0, strInput.indexOf(".")) : strInput;

        char[] arrChar = strInput.toCharArray();

        int result = 0;

        for (int i = 0; i < arrChar.length; i++) {
            int c = arrChar[i];

            // 0在unicode表中的排序位置为48，9在unicode表中的排序位置为57
            // 确定字符是否为阿拉伯数字
            if (c >= 48 && c <= 57) {

                // 通过unicode排序位置的差可得当前阿拉伯数字的值
                result += (c - 48) * Math.pow(10, arrChar.length - i - 1);

            } else {
                // 若包含非阿拉伯数字则直接返回0
                return 0;
            }
        }

        return result;
    }
```