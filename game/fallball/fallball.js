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
	world = new b2World(new b2Vec2(0, 9.8), true);

	fixDef = new b2FixtureDef();
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.2;

	bodyDef = new b2BodyDef();

	createGround();
	createBomb();
	createDebugDraw();
	setInterval(update, 1000 / 60);
}

function createGround () {
	var vertices = [
		new b2Vec2(30, 10),
		new b2Vec2(10, 10),
		new b2Vec2(0, 0)
	]
	fixDef.shape = new b2PolygonShape.AsArray(vertices, 3);
	
	//fixDef.shape = new b2PolygonShape();	
	//fixDef.shape.SetAsBox(30, 1);

	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(0, 5);

	world.CreateBody(bodyDef).CreateFixture(fixDef);
}

function createBomb () {
	fixDef.shape = new b2CircleShape(0.5);

	bodyDef.type = b2Body.b2_dynamicBody;
	bodyDef.position.Set(9.7, 1);

	bomb = world.CreateBody(bodyDef);
	bomb.userData = "iambomb";
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