#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface CordovaBattery : CDVPlugin {
    UIDeviceBatteryState state;
    float level;
    NSString* callbackId;
}

@property (strong) NSString* callbackId;

- (void)getLevel:(CDVInvokedUrlCommand*)command;
@end