// call npm package
module.exports = function(app) {
    // get bot data stored on server
    app.get("/journey", async (req, res) => {
        try {
            res.send({
                mainImg: "../img/1.jpg",
                mainTitle: "금손 남친 커플 - 세이엘 여행 다이어리",
                dDay: 465,
                journey: [
                    {
                        dDay: 462,
                        publishDate: "2020-12-27",
                        img: [
                            "../img/2.jpg",
                            "../img/3.jpg",
                            "../img/4.jpg",
                            "../img/5.jpg"
                        ],
                        contents:
                            "오빠랑 유럽여행 - 체코 프라하 팁 투어 그리고 프라하 성 프라하 팀 투어를 하기로 했따."
                    },
                    {
                        dDay: 425,
                        publishDate: "2020-12-25",
                        img: [
                            "../img/2.jpg",
                            "../img/3.jpg",
                            "../img/4.jpg",
                            "../img/5.jpg"
                        ],
                        contents:
                            "여기 찍은 사진만 한 30장 있는데 왜냐면 엄청 충격적으로 멋있었기 때문입니다."
                    }
                ]
            });
            res.end();
        } catch (err) {
            res.status(400).json({
                test: "test"
            });
            // send to client
            res.end();
        }
    });
};
