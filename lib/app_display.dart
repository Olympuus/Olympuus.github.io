import 'package:flutter/material.dart';
import 'dart:js' as js;

class AppDisplay extends StatelessWidget {

  final String featureGraphicPath;
  final String appStoreUrl;
  final String playStoreUrl;

  const AppDisplay({
    Key? key,
    required this.featureGraphicPath,
    required this.appStoreUrl,
    required this.playStoreUrl
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 5,
            blurRadius: 7,
            offset: Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Wrap(
        children: [
          Column(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(10),
                  topRight: Radius.circular(10)
                ),
                child: Image.asset(featureGraphicPath),
              ),
              // Row(
              //   children: [
              //     ClipRRect(
              //       borderRadius: BorderRadius.circular(10.0),
              //       child: Image.asset(
              //         "assets/al2icon.png",
              //         width: 70,
              //       )
              //     ),
              //     Row(
              //       mainAxisAlignment: MainAxisAlignment.center,
              //       children: [
              //         Text(
              //           "Assembly Line 2",
              //           textAlign: TextAlign.center,
              //           style: TextStyle(
              //             fontWeight: FontWeight.bold,
              //             fontSize: 30
              //           ),
              //         ),
              //       ],
              //     )
              //   ],
              // ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    InkWell(
                      onTap: () {
                        js.context.callMethod('open', [appStoreUrl]);
                      },
                      child: Image.asset(
                        "assets/app-store-badge.png",
                        height: 50,
                      ),
                    ),
                    SizedBox(width: 20,),
                    InkWell(
                      onTap: () {
                        js.context.callMethod('open', [playStoreUrl]);
                      },
                      child: Image.asset(
                        "assets/google-play-badge.png",
                        height: 50,
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ]
      ),
    );
  }
}