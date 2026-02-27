import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import ReactNativeNavigation

@UIApplicationMain
class AppDelegate: RNNAppDelegate {
  
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    self.reactNativeDelegate = ReactNativeDelegate()

    // Let RNNAppDelegate do its bootstrap and bridge creation
    let result = super.application(application, didFinishLaunchingWithOptions: launchOptions)
    return result
  }

}

class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }
  
  override func bundleURL() -> URL? {
    #if DEBUG
        RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
        Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
}
