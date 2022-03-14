using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using WebSocketSharp;

public class WebSocketTalker : MonoBehaviour
{
    WebSocket ws;

    private void Start() {
        ws = new WebSocket("ws://127.0.0.1:48000");

        ws.OnMessage += (sender, e) => {
            Debug.Log($"Message received from: {(sender as WebSocket).Url}, Data: {e.Data}");
        };

        ws.Connect();
    }

    private void Update() {
        if(ws == null) {
            return;
        }

        if(Input.GetKeyDown(KeyCode.Space)) {
            ws.Send("Hello");
        }
    }


}
