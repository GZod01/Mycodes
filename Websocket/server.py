from Robot import Robot;
import time;
robot = robot()
robot.init(3,4)
import asyncio;

import websockets;

# create handler for each connection

async def handler(websocket, path):

    data = await websocket.recv()

    reply = f"Data recieved as: {data}!"

    await websocket.send(reply)
    return data



start_server = websockets.serve(handler, "localhost", 8000)

 

asyncio.get_event_loop().run_until_complete(start_server)

asyncio.get_event_loop().run_forever()
if data == 'hello':
    print("i received the message")
    robot.Avancer()
    time.sleep(20)
    robot.Stop()
if data == 'up':
    robot.Avancer()
if data == 'right':
    robot.Droite()
if data == 'left':
    robot.Gauche()
if data == 'down':
    robot.Reculer()
