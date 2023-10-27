import 'package:flutter/material.dart';
import 'package:olympus_website/app_display.dart';

class Homepage extends StatelessWidget {
  const Homepage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: SizedBox(
              height: 120,
              child: Image.asset(
                "assets/LOGO_NO_BACKGROUND.png",
                color: Colors.black,
              )
            ),
          ),
          SizedBox(height: 50,),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AppDisplay(
                featureGraphicPath: "assets/featuregraphic_al.png",
                appStoreUrl: "https://apps.apple.com/us/app/assembly-line/id1339770318",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.olympus.assemblyline",
              ),
              SizedBox(width: 60,),
              AppDisplay(
                featureGraphicPath: "assets/featuregraphic_al2.png",
                appStoreUrl: "https://apps.apple.com/us/app/assembly-line-2/id1669722484",
                playStoreUrl: "https://play.google.com/store/apps/details?id=com.Olympus.AssemblyLine2",
              )
            ],
          ),
        ],
      ),
    );
  }
}