const player = {
    name : 'r1',
    hp : 100,
    energy : 50,
    maxEnergy : 100,
    attackPower : 20,
    isAlive : true
};

const enemy = {
    name : 'r2',
    hp : 100,
    energy : 40,
    maxEnergy : 100,
    attackPower : 15,
    isAlive : true
}

// console.log(player)
// console.log(enemy)

function attack(attacker , defender){
    const damage = attacker.attackPower;
    defender.hp -= damage;
    
    console.log(`${attacker.name} attacks ${defender.name}!`);
    console.log(`${defender.name} takes ${damage} damage.`);
    console.log(`${defender.name} HP : ${defender.hp}!`);

}

// attack(player, enemy);

function recharge(robot){
    const rechargeAmount = 20;

    if(robot.energy < robot.maxEnergy){
        robot.energy += rechargeAmount;

        if(robot.energy > robot.maxEnergy){
            robot.energy = robot.maxEnergy;
        }
        
        console.log(`${robot.name} recharged`);
        console.log(`${robot.name} Energy : ${robot.energy}`);
    }else{
        console.log("Already at maximum energy");
    }
}

function playerAction(choice){
    switch(choice){
        case 1:
            attack(player,enemy);
            break;
        
        case 2:
            recharge(player);
            break;
        
        default:
            console.log("Invalid choice");
    }
}


while (player.isAlive && enemy.isAlive) {

    console.log("\n===== ROBOT BATTLE =====");
    console.log(`${player.name} HP: ${player.hp} | Energy: ${player.energy}`);
    console.log(`${enemy.name} HP: ${enemy.hp} | Energy: ${enemy.energy}`);

    const choice = Number(
        prompt("1. Attack\n2. Recharge\nChoose your action: ")
    );

    playerAction(choice);
}