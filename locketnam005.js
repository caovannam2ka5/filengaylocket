// ========== Mã số ========= //
ánh xạ hằng số = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Mềm': ['Vàng']
  };
  // ========= Cố định phần cứng ========== //
  // ========= @Hoàng Nam 005 ========== //
  // ========= Facebook : Cao Văn Nam (v) ===========//
  //========== Bản Này Đang Bán Với Giá 2tr ============//
  //========== Cấm Thằng Bé Share chỉnh tháng trước ngày sau nhá ===============//
  var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Bản Này Độc Quyển Của Hoàng Nam 2005";var nam005={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-10T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2025-01-17T01 :04:18Z",ngày_mua_hàng:"2025-01-17T01:04:17Z",cửa_hàng:"cửa_hàng_ứng_dụng"},Hoangnam005={grace_period_expires_date:null,ngày_mua_hàng:"2025-01-17T01:04:17Z",mã_sản_phẩm:"com.nam005.premium.yearly",ngày_hết_hết:"2099-12-10T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(Hoangnam005.product_identifier=s,obj.subscriber.subscriptions[s]=nam005):obj.subscriber.subscriptions["com.nam005.premium.yearly"]=nam005,obj.subscriber.entitlements[e]=Hoangnam005}nếu không thì obj.subscriber.subscriptions["com.nam005.premium.yearly"]=nam005,obj.subscriber.entitlements.pro=Hoangnam005;$done({body:JSON.stringify(obj)});
