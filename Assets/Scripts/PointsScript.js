#pragma strict


function Start () {
	Debug.Log("Inicia");
}

function OnCollisionEnter(col:Collision){
	if(col.gameObject.tag == "beam"){
		clockScript.SCORE = clockScript.SCORE + 10;
	}
	if(col.gameObject.tag == "wall"){
		clockScript.LIFE = clockScript.LIFE - 10;
		Debug.Log(clockScript.LIFE);
	}
}

function Update () {

}