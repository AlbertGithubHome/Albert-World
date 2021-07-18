window.addEventListener("load", main, false);

var b2Vec2 = Box2D.Common.Math.b2Vec2
, b2AABB = Box2D.Collision.b2AABB
, b2BodyDef = Box2D.Dynamics.b2BodyDef
, b2Body = Box2D.Dynamics.b2Body
, b2FixtureDef = Box2D.Dynamics.b2FixtureDef
, b2Fixture = Box2D.Dynamics.b2Fixture
, b2World = Box2D.Dynamics.b2World
, b2MassData = Box2D.Collision.Shapes.b2MassData
, b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
, b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
, b2DebugDraw = Box2D.Dynamics.b2DebugDraw
, b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
, b2RayCastInput = Box2D.Collision.b2RayCastInput
, b2RayCastOutput = Box2D.Collision.b2RayCastOutput;

var world, fixDef, bodyDef;
var bomb = null;

function main () {
	world = new b2World(new b2Vec2(0, 10), true);

	fixDef = new b2FixtureDef();
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.2;

	bodyDef = new b2BodyDef();

	createGround();
	createBall();
	createDebugDraw();
	setInterval(update, 1000 / 60);
}

function createBall () {
	fixDef.shape = new b2CircleShape(0.6);

	bodyDef.type = b2Body.b2_dynamicBody;
	bodyDef.userData=document.getElementById("blueball");
	bodyDef.position.Set(3, 1);

	bomb = world.CreateBody(bodyDef);
	bomb.userData = "iamball";
	bomb.CreateFixture(fixDef);
}

function createDebugDraw () {
	var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
	debugDraw.SetDrawScale(30.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit | b2DebugDraw.e_controllerBit | b2DebugDraw.e_pairBit);
	world.SetDebugDraw(debugDraw);
}

function update () {
	world.Step(1 / 60, 10, 10);
	world.DrawDebugData();
	world.ClearForces();
}

function createGround () {

	var initX = 5
	var initY = 10;
	var vertices = [
		new b2Vec2(0, 0),
		new b2Vec2(initX, initY),
		new b2Vec2(0, initY),
	]
	fixDef.shape = new b2PolygonShape.AsArray(vertices, 3);
	
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(0, 0);
	world.CreateBody(bodyDef).CreateFixture(fixDef);

	var width = 0.1
	var height = 0.1
	var hdeta = 0.1
	var x = initX + width
	var y = initY + height

	for (var i = 0; i < 50; i++)
	{
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(width, height);

		bodyDef.position.Set(x, y);

		x += width*2;
		y += hdeta;

		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}

	for (var i = 0; i < 30; i++)
	{
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(width, height);

		bodyDef.position.Set(x, y);

		x += width*2;
		y -= hdeta;
		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}

	for (var i = 0; i < 100; i++)
	{
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(width, height);

		bodyDef.position.Set(x, y);

		x += width*2;
		y += hdeta;
		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}

	for (var i = 0; i < 30; i++)
	{
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(width, height);

		bodyDef.position.Set(x, y);

		x += width*2;
		y -= hdeta;
		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}

	for (var i = 0; i < 100; i++)
	{
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(width, height);

		bodyDef.position.Set(x, y);

		x += width*2;
		y += hdeta;
		world.CreateBody(bodyDef).CreateFixture(fixDef);
	}


}