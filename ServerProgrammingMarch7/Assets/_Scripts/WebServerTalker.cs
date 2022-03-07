using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class WebServerTalker : MonoBehaviour
{
    const string URL = "http://localhost:46000/user/";

    public InputField _idInput;
    public Button _btnGenerate;

    void Start()
    {
        // StartCoroutine(GetWebData(URL, "HanUseGentoo"));
        _btnGenerate.onClick.AddListener(RequestGetUser);
    }

    IEnumerator GetWebData(string addr, string myId)
    {
        UnityWebRequest www = UnityWebRequest.Get(addr + myId);

        yield return www.SendWebRequest();
        
        if(www.result != UnityWebRequest.Result.Success) {
            Debug.LogError(www.error);
        } else {
            Debug.Log(www.downloadHandler.text);
        }
    }

    public void RequestGetUser() {
        if(_idInput.text.Trim().Length == 0) {
            Debug.Log("meh.");
        } else {
            string id = _idInput.text;
            StartCoroutine(GetWebData(URL, id));
        }

        _idInput.text = "";
    }
}
