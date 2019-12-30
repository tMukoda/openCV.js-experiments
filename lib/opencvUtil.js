/*

This is created by Takashi Mukoda
Open source (free to use)

*/
"use strict";

class opencvUtil{
    constructor() {
        
    }

    // clarifies which Mat type the image uses  
    showType(src) {
        /*
         references: 
         https://tech-blog.s-yoshiki.com/2018/11/787/
         http://koshinran.hateblo.jp/entry/2017/10/30/200250
         */
        let index = src.depth() % 8;
        
        //bit depth list
        const depthList = [
            "CV_8U",
            "CV_8S",
            "CV_16U",
            "CV_16S",
            "CV_32S",
            "CV_32F",
            "CV_64F",
        ]

        return depthList[index] + 'C' + src.channels();
    }
}