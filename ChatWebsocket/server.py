"""
    message templates:
    {
        "name":username,
        "content":content,
        "date":date,
    }


"""



import asyncio;
import json;
import websockets;

dataslist = []

async def handler(websocket, path):
    global dataslist
    data = await websocket.recv()
    try:
        data = json.dumps(data)
    except TypeError:
        await websocket.send('TypeError')
    await websocket.send(str(dataslist))
    dataslist.append(data)



start_server = websockets.serve(handler, "0.0.0.0", 8000)

 

asyncio.get_event_loop().run_until_complete(start_server)

asyncio.get_event_loop().run_forever()