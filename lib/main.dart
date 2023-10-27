import 'package:flutter/material.dart';
import 'package:olympus_website/homepage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Olympus Games',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Homepage()
    );
  }
}