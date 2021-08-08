window.addEventListener("load", main, false);

// some import modules or functions
//==================================
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
//==================================

// some global variables
//==================================
var world, fixDef, bodyDef, context, canvasPosition;
var bomb = null;
//==================================

// some runtime configuration
//==================================
var clickRes = "sun"
var loadRes = "huihui"
var ballNums = 10
var initVelocity = 5
//==================================

function main() {
    // create a world
    world = new b2World(new b2Vec2(0, 9.8), true);

    fixDef = new b2FixtureDef();
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    bodyDef = new b2BodyDef();

    context = document.getElementById("myCanvas").getContext("2d");
    canvasPosition = getElementPosition(document.getElementById("myCanvas"));

    document.addEventListener("mousedown", function(e) {
        createBall((e.clientX-canvasPosition.x)/30, (e.clientY-canvasPosition.y)/30, document.getElementById(clickRes), 666);
    });

    createGround();
    createFallingObjets();

    createDebugDraw();
    setInterval(update, 1000 / 60);
}

function createGround () {

    triangleWidth = 25
    triangleHeight = 10
    deltaHeight = triangleHeight / 2

    for (var i = 0; i < 4; i++) {
        var vertices = [ new b2Vec2(0, 0), new b2Vec2(triangleWidth, triangleHeight), new b2Vec2(0, triangleHeight) ]
        fixDef.shape = new b2PolygonShape.AsArray(vertices, 3);
        
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.position.Set(0, i * triangleHeight);
    
        world.CreateBody(bodyDef).CreateFixture(fixDef);
    }

    for (var i = 0; i < 3; i++) {
        var vertices = [ new b2Vec2(triangleWidth, 0), new b2Vec2(triangleWidth, triangleHeight), new b2Vec2(0, triangleHeight) ]
        fixDef.shape = new b2PolygonShape.AsArray(vertices, 3);
        
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.position.Set(triangleWidth, i * triangleHeight+ deltaHeight);
    
        world.CreateBody(bodyDef).CreateFixture(fixDef);
    }

    createBox(triangleWidth, triangleHeight, 1, 0.1, b2Body.b2_staticBody)
}

function createBall(x, y, data, index){
    fixDef.shape = new b2CircleShape(0.2+Math.random()/2);

    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.userData = data;

    bodyDef.position.Set(x, y);

    bomb = world.CreateBody(bodyDef);
    bomb.userData = "iamball_" + index;
    bomb.CreateFixture(fixDef)

    return bomb;
} 

function createBox(x, y, boxHalfWidth, boxHalfHeight, type, data)
{
    fixDef.shape = new b2PolygonShape();	
    fixDef.shape.SetAsBox(boxHalfWidth, boxHalfHeight);

    bodyDef.type = type;
    bodyDef.userData = data;

    bodyDef.position.Set(x+boxHalfWidth, y+boxHalfHeight);
    world.CreateBody(bodyDef).CreateFixture(fixDef);
}

function createFallingObjets () {
    for (var i = 0; i < ballNums; i++) {
        ball = createBall(5, 1, document.getElementById(loadRes), i);
        ball.SetLinearVelocity(new b2Vec2(ball.GetLinearVelocity().x + initVelocity, ball.GetLinearVelocity().y + initVelocity));
        
        //var buoyancyForce = this.gravity.GetNegative();
        //var buoyancyForce = new b2Vec2(0, 19.8);
        //ball.ApplyForce(buoyancyForce, ball.GetWorldCenter());
    }
    
    for(var i = 0; i < 2; i++) {
        //createBox(5, 1, 0.1, 0.1, b2Body.b2_dynamicBody, document.getElementById(loadRes))
    }
}

function createDebugDraw () {
    var debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("myCanvas").getContext("2d"));
    debugDraw.SetDrawScale(30.0);
    debugDraw.SetFillAlpha(0.5);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit | b2DebugDraw.e_controllerBit | b2DebugDraw.e_pairBit);
    world.SetDebugDraw(debugDraw);
}

function syncImageAction()
{
    for (var b = world.m_bodyList; b != null; b = b.m_next) {
        if (b.GetUserData()) {
            context.save();
            context.translate(b.GetPosition().x * 30, b.GetPosition().y * 30);
            context.rotate(b.GetAngle());
            context.drawImage(b.GetUserData(), -b.GetUserData().width / 2, -b.GetUserData().height / 2);
            context.restore();
        }
    }
}

function update () {
    world.Step(1 / 60, 10, 10);
    world.DrawDebugData();
    syncImageAction();
    world.ClearForces();
}

function getElementPosition(element) {
    var elem=element, tagName="", x=0, y=0;
    while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
        y += elem.offsetTop;
        x += elem.offsetLeft;
        tagName = elem.tagName.toUpperCase();

        if (tagName == "BODY") {
            elem = 0;
        }
        else if (typeof(elem) == "object" && typeof(elem.offsetParent) == "object") {
            elem = elem.offsetParent;
        }
    }
    return {x: x, y: y};
} 