var playerName = window.prompt("what's your robot name?");
var playerHealth= 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = "50";
var enemyAttack = "12";
var fight = function () {
    window.alert("Welcom to Robot Gladiator!");
}
fight();
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
);
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
}
else{
    window.alert(enemyName + " still has " + enemyHealth + "health left");
}
fight();
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + " . " + playerName +" now has " + playerHealth
);

var playerHealth = 100;
if (playerHealth > 0) {
    console.log("Your player is still alive");
}
fight()