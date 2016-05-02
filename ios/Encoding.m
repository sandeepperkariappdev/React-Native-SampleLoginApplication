#include "Encoding.h"
#include "RCTRootView.h"

@implementation Encoding

RCT_EXPORT_MODULE();
//name of the method to be used in JS
RCT_EXPORT_METHOD(base64Encode:(NSString*)str callback:(RCTResponseSenderBlock)callback){
    NSData *nsdata =[str dataUsingEncoding:NSUTF8StringEncoding];
    NSString *base64Encoded = [nsdata base64EncodedStringWithOptions:0];
    
    callback(@[base64Encoded]);
}

@end