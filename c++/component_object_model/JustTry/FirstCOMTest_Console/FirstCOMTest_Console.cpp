// FirstCOMTest_Console.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"

#include "atlcomcli.h"  
#import "J:\\FirstCOM.dll" no_namespace

int _tmain(int argc, _TCHAR* argv[])  
{  
	CoInitialize(NULL);  
	CLSID clsid;  
	CLSIDFromProgID(OLESTR("FirstCOM.math.1"),&clsid);  
	CComPtr<IFirstClass> pFirstClass;//智能指针  
	pFirstClass.CoCreateInstance(clsid);  
	long ret = pFirstClass->Add(1,2);  
	printf("%d\n",ret);  
	pFirstClass.Release();  
	CoUninitialize();  

	return 0;  
} 

