export default class bikeNews {
  // 列表查询
  static getNewsList() {
    return {
      data: [
        {
          title: '新闻中心10',
          summary: '新闻中心10',
          content:
            '\u003cp\u003e\u003cspan style\u003d"color: rgb(31, 44, 61); font-family: \u0026quot;Helvetica Neue\u0026quot;, \u0026quot;Microsoft YaHei\u0026quot;, Helvetica, Arial, sans-serif; font-size: 14px; background-color: rgb(238, 241, 246);"\u003e新闻中心\u003c/span\u003e10\u003c/p\u003e',
          isOnShelve: true,
          relatedLinks: [{}],
          relatedLinksJsonb: '[{"relatedLink": null, "relatedTitle": null}]',
          guid: '708759562dbe4bacbb5b4848fdd55fa0',
          createDate: '2018-01-10 19:28:28',
          updateDate: '2018-01-10 19:28:28',
          createUserName: 'jessica',
          updateUserName: 'jessica',
        },
        {
          title: '新闻中心2',
          summary: '新闻中心2',
          content: '\u003cp\u003e新闻中心2\u003c/p\u003e',
          isOnShelve: true,
          relatedLinks: [{}],
          relatedLinksJsonb: '[{"relatedLink": null, "relatedTitle": null}]',
          guid: '094e2370af6846e89973a2a74bcfd145',
          createDate: '2018-01-10 19:27:00',
          updateDate: '2018-01-10 19:27:00',
          createUserName: 'jessica',
          updateUserName: 'jessica',
        },
      ],
      recordsCount: 2,
    };
  }

  static updateNewsInfo() {
    return {
      status: 1,
    };
  }
}
