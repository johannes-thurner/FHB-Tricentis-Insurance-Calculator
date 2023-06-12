const userConfig = {
    localDevices: {
        androidEmulatorUdid: "emulator-5554"
    },
    cloudDevices: {
        androidDeviceUdid: "RF8M3014S8L",
        iOSDeviceUdid: "<Select the udid of a headspin iOS device>",
        browser: {
            browserName: "chrome"
        }
    },
    headspinHostConfig: {
        protocol: "https",
        hostname : "appium-dev.headspin.io",
        port : 443,
        path : "/v0/aee8d148cf0f49189c1e0719869c52f1/wd/hub",
    }
}
export default userConfig