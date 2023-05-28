const PCUA =  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{version} Safari/537.36';
const MBUA =  'Mozilla/5.0 (Linux; Android 8.0.0; BZT-W09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Safari/537.36'
function changeUA(ua){
  Object.defineProperty(navigator,'userAgent',{
    value:ua,
    writable:false
  });
}
