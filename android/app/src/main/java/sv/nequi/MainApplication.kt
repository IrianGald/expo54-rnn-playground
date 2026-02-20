package sv.nequi

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.common.ReleaseLevel
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactNativeHost

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

import com.reactnativenavigation.NavigationApplication // +++ rnn
import com.reactnativenavigation.RNNToggles // +++ rnn
import com.reactnativenavigation.NavigationPackage // +++ rnn
import com.reactnativenavigation.react.NavigationReactNativeHost // +++ rnn

//class MainApplication : Application(), ReactApplication { // --- rnn
class MainApplication : NavigationApplication(mapOf(
  RNNToggles.TOP_BAR_COLOR_ANIMATION__PUSH to true,
  RNNToggles.TOP_BAR_COLOR_ANIMATION__TABS to true,
  RNNToggles.TAB_BAR_TRANSLUCENCE to true,
)) { // +++ rnn

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
      this,
//      object : DefaultReactNativeHost(this) { // --- rnn
    object : NavigationReactNativeHost(this) { // +++ rnn
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
            }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    DefaultNewArchitectureEntryPoint.releaseLevel = try {
      ReleaseLevel.valueOf(BuildConfig.REACT_NATIVE_RELEASE_LEVEL.uppercase())
    } catch (e: IllegalArgumentException) {
      ReleaseLevel.STABLE
    }
//    loadReactNative(this) // --- rnn
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}
