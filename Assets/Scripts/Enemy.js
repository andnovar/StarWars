#pragma strict

var beam:GameObject;
var ratio: float;
var ini_x:float;
var ini_y:float;
var ini_z:float;

function Start () {
	var pos:Vector3 = transform.position;
	ini_x = transform.position.x;
	ini_y = transform.position.y;
	ini_z = transform.position.z;
	
	var vector = Vector3(90,0,0);
	var target = Quaternion.Euler(vector);
	var rot:Quaternion = target;
	
	Instantiate(beam, pos, rot);
	ratio = 0.0;
}

function Update () {
	transform.position = Vector3(Mathf.PingPong(Time.time*1.5,9.9)-4.9,Mathf.PingPong(Time.time*1.5,3)+3,Mathf.PingPong(Time.time*1.5,3)+0.5);
	ratio+=0.05;
	beam = GameObject.FindWithTag("beam");
	if(beam.transform.position.z > -3){
		beam.transform.position = Vector3(ini_x, ini_y, ini_z-ratio);
	}else{
		ratio = 0.0;
		ini_x = transform.position.x;
		ini_y = transform.position.y;
		ini_z = transform.position.z;
		beam.transform.position = Vector3(ini_x, ini_y, ini_z-ratio);
	}
	
}