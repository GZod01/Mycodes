from Robot import Robot
robot = robot()
import asyncio

import websockets

# create handler for each connection

async def handler(websocket, path):

    data = await websocket.recv()

    reply = f"Data recieved as: {data}!"

    await websocket.send(reply)
    return data



start_server = websockets.serve(handler, "localhost", 8000)

 

asyncio.get_event_loop().run_until_complete(start_server)

asyncio.get_event_loop().run_forever()

if data == 'up':
    robot.avancer()
if data == 'right':
    robot.droite()
if data == 'left':
    robot.gauche()
if data == 'down':
    robot.reculer()
