function Player(name, teamColor) {
    this.name = name;
    this.enemys = [];
    this.parteners = [];
    this.state = 'live';
    this.teamColor = teamColor;//队伍的颜色
}
Player.prototype.win = function () {
    console.log(`${this.name}赢了`);
};
Player.prototype.lose = function () {
    console.log(`${this.name}输了`);
};

// 工厂模式  流程太多，分颜色分拨
const players = [];
function playerFactory(name, teamColor) {
    //实例化 分配对
    var newPlayer = new Player(name, teamColor);
    for(var i = 0; i< players.length;i++){
        const player = players[i];
        if (player1.teamColor === newPlayer.teamColor) {
            player.parteners.push(newPlayer);
            newPlayer.parteners.push(player);
        }else {
            player.enemys.push(newPlayer);
            newPlayer.enemys.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
Player.prototype.die = function () {
    this.lose();
    // this.state = 'die';
    let all_dead = true;
    for (let i = 0; i < this.parteners.length; i++) {
        if (this.parteners[i].state === 'live') {
            all_dead = false;
            break;
        }
    }
    if (all_dead) {
        this.lose();
        for (let i = 0; i < this.parteners.length; i++) {
            this.parteners[i].lose()
        }
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].win()
        }
    }
}
// const player1 = new Player('p1','red');
// const player2 = new Player('p2','blue');

const player1 = playerFactory('皮蛋','red');
const player2 = playerFactory('小怪','red');
const player3 = playerFactory('宝宝','red');
const player4 = playerFactory('小强','red');

const player5 = playerFactory('p5', 'blue');
const player6 = playerFactory('p6', 'blue');
const player7 = playerFactory('p7', 'blue');
const player8 = playerFactory('p8', 'blue');

player1.die();
player2.die();
player3.die();
player4.die();


// 互成敌人
// player1.enemy = player2;
// player2.enemy = player1;





