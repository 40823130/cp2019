var tipuesearch = {"pages": [{'title': 'About', 'text': '\n', 'tags': '', 'url': 'About.html'}, {'title': 'Dart', 'text': '\n', 'tags': '', 'url': 'Dart.html'}, {'title': '累加函數程式', 'text': 'dart:\xa0 https://dartpad.dartlang.org/f2586952fc8889ed0c20a5b6b85de220 \n gist:\xa0 https://gist.github.com/40823130/f2586952fc8889ed0c20a5b6b85de220 \n \n \n \n', 'tags': '', 'url': '累加函數程式.html'}, {'title': '你在哈囉嗎', 'text': 'gist:\xa0 https://gist.github.com/40823130/f37adb1ae5ba9734fb90b4d41d2cbb32 \n http://mde.tw/dartpad/?id=f37adb1ae5ba9734fb90b4d41d2cbb32 \n \n main() {\n  for (int i = 0; i < 10; i++) {\n    print(\'你在哈囉嗎 $i\');\n  }\n  print(\'你在哈囉嗎 嘻嘻\');\n} \n \n \n \n \n http://mde.tw/dartpad/?id=4859a448b0c5f6cf645026e7f5407f49 \n \n void main(){\n  print("你是在哈囉嗎");\n} \n \n \n \n', 'tags': '', 'url': '你在哈囉嗎.html'}, {'title': '亂數分組', 'text': 'gist:\xa0 https://gist.github.com/40823130/e58d1f4bb803b9eaf51afe50899879a1 \n http://mde.tw/dartpad/?id=e58d1f4bb803b9eaf51afe50899879a1 \n \n 原始碼: \n import \'dart:html\';\n\nvoid main() {\n  // 每一組 10 人\n  int num = 10;\n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  // 每組學員暫存數列\n  var gp_list = [];\n  // 全班分組數列\n  var cp2019 = [];\n\n  HttpRequest.getString(\n          \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\')\n      .then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var stud_list = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    stud_list.shuffle();\n    // 逐一讀取已經弄亂的學生學號數列, 利用模數運算每幾人分成一組\n    for (i = 0; i < stud_list.length; i++) {\n      // 0, 1~(num-1), num\n      if (i % num == 0) {\n        gp_list = [];\n        // 列印區隔符號\n        print(\'=\' * 20);\n        print("group $gth :");\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n        gth = gth + 1;\n      } else {\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n      }\n      if (i % num == 0) {\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n        cp2019.add(gp_list);\n      }\n    }\n    // 列出全班分組數列\n    print(cp2019);\n  });\n} \n \n \n', 'tags': '', 'url': '亂數分組.html'}, {'title': '二階常微分方程式', 'text': '此為有阻尼係數的彈簧x-t-v圖 \n \n 此為沒有阻尼的 \n \n', 'tags': '', 'url': '二階常微分方程式.html'}, {'title': '有按鈕的', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4   Dropdown   Multiselect   Search   Login   溫度轉換 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': '有按鈕的.html'}, {'title': '影片', 'text': '\n \n \n', 'tags': '', 'url': '影片.html'}, {'title': 'W16查驗', 'text': '', 'tags': '', 'url': 'W16查驗.html'}]};