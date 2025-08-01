import { isAilpayNative } from '../../../src/_util/support';
import { allComponents, componentList } from '../../utils/constants';

Page({
  data: {
    componentList,
    finding: false,
    searchResult: [],
  },
  onShow() {
    this.setData({
      finding: false,
      searchResult: [],
    });
  },
  onClearSearch() {
    this.setData({
      finding: false,
      searchResult: [],
    });
  },
  onSearch(e) {
    /// #if WECHAT
    e = e.detail;
    /// #endif
    if (e.length > 0) {
      const result = [];
      allComponents.forEach((searchKey) => {
        if (searchKey.name.toLowerCase().match(e)) {
          result.push(searchKey);
        }
      });
      this.setData({
        finding: true,
        searchResult: result,
      });
    } else {
      this.setData({
        finding: false,
        searchResult: [],
      });
    }
  },
  listPress(e) {
    console.log('navigateTo', e.currentTarget.dataset.url);
    /// #if ALIPAY
    if (isAilpayNative()) {
      // @ts-ignore
      ac.call('navigateTo', {
        url: e.currentTarget.dataset.url.slice(1),
      });
      return;
    }
    my.navigateTo({
      url: e.currentTarget.dataset.url,
    });
    /// #endif
    /// #if WECHAT
    //@ts-ignore
    wx.navigateTo({
      url: '/demo' + e.currentTarget.dataset.url,
    });
    /// #endif
  },
});
