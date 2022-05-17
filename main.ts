microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    microIoT.showUserText(0, message.substr(2, 10))
})
microIoT.initDisplay()
microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
microIoT.microIoT_MQTT(
"k3Y9aToienA2wlcEYDeyxgFk",
"MDj2enG21I1iUFSSwRpclvqqmotsRl71",
"test/test",
microIoT.SERVERS.Global
)
basic.forever(function () {
	
})
