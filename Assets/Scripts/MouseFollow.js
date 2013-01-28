#pragma strict

function Start () {

}

var smooth = 2.0;
var tiltAngle = 90.0;
var sensibilityX = -2;
var sensibilityY = -1.2;

function Update () {
	var halfW: float = Screen.width / 2;
	transform.position.x = (Input.mousePosition.x - halfW) / halfW;
	var halfH: float = Screen.height / 3;
	transform.position.z = (Input.mousePosition.y - halfH) / halfH;
	
	var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * sensibilityX;
	var tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * sensibilityY;
	var vector = Vector3(tiltAroundX,0,tiltAroundZ);
	var target = Quaternion.Euler(vector);
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
}