var DICT = {
    questions: {
        length: 10,
        0: {
            title: '我国国歌叫什么？',
            answers: ['A.《义勇军进行曲》', 'B.《歌唱祖国》', 'C.《我和我的祖国》'],
            question_type: 'accomplish'
        },
        1: {
            title: '四三拍的强弱规律是？',
            answers: ['A. 强、强、弱', 'B. 强、弱、弱', 'C. 强、次强、弱'],
            question_type: 'knowledge'
        },
        2: {
            title: '图片中的乐器是什么？',
            answers: ['A. 小提琴', 'B. 琉特琴', 'C. 吉他'],
            type: 'image',
            path: '../static/images/violin.jpg',
            question_type: 'accomplish'
        },
        3: {
            title: 'D.C.与D.S在演奏中是（ ）记号',
            answers: ['A. 反复记号', 'B. 力度记号', 'C. 重复当前小节'],
            question_type: 'knowledge'
        },
        4: {
            title: '钢琴一共有多少个键？',
            answers: ['A. 91键', 'B. 100键', 'C. 88键'],
            question_type: 'accomplish'
        },
        5: {
            title: '音频中你能听到几个音同时响？',
            answers: ['A. 2个音', 'B. 3个音', 'C. 4个音'],
            type: 'music',
            path: '../static/music/6.mp3',
            question_type: 'talent'
        },
        6: {
            title: '这段音乐更符合下面哪种场景？',
            answers: ['A. 海上星空', 'B. 夏日麦田', 'C. 喧嚣闹市'],
            type: 'music',
            path: '../static/music/7.mp3',
            question_type: 'talent'
        },
        7: {
            title: '这段音乐的演唱形式是？',
            answers: ['A. 童声独唱', 'B. 女声齐唱', 'C. 童声齐唱'],
            type: 'music',
            path: '../static/music/8.mp3',
            question_type: 'talent'
        },
        8: {
            title: '这段音乐是什么拍子？',
            answers: ['A. 四二拍', 'B. 八六拍', 'C. 四三拍'],
            type: 'music',
            path: '../static/music/9.mp3',
            question_type: 'talent'
        },
        9: {
            title: '这段音乐是哪个国家的音乐风格？',
            answers: ['A. 日本', 'B. 苏格兰', 'C. 巴西'],
            type: 'music',
            path: '../static/music/10.mp3',
            question_type: 'knowledge'
        }
    },
    standard: {
        length: 11,
        0: {
            score: 0,
            percent: '0%'
        },
        1: {
            score: 40,
            percent: '10%'
        },
        2: {
            score: 60,
            percent: '20%'
        },
        3: {
            score: 75,
            percent: '25%'
        },
        4: {
            score: 90,
            percent: '45%'
        },
        5: {
            score: 105,
            percent: '55%'
        },
        6: {
            score: 115,
            percent: '70%'
        },
        7: {
            score: 125,
            percent: '80%'
        },
        8: {
            score: 135,
            percent: '90%'
        },
        9: {
            score: 145,
            percent: '95%'
        },
        10: {
            score: 150,
            percent: '100%'
        }
    },
    items: {
        accomplish: {
            0: 'fine',
            1: 'fine',
            2: 'good',
            3: 'great'
        },
        knowledge: {
            0: 'fine',
            1: 'fine',
            2: 'good',
            3: 'great'
        },
        talent: {
            0: 'fine',
            1: 'fine',
            2: 'good',
            3: 'good',
            4: 'great'
        }
    }
}