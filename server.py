#!/usr/bin/env python3

import socket
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

PORT = 8888

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("gmail.com", 80))
localIP = s.getsockname()[0]
s.close()

print("Starting server on {}:{}".format(localIP, PORT))

Handler = SimpleHTTPRequestHandler
server = TCPServer(('', PORT), Handler)
server.serve_forever()