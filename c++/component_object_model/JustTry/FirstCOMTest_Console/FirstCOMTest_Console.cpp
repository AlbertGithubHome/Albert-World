// FirstCOMTest_Console.cpp : �������̨Ӧ�ó������ڵ㡣
//

#include "stdafx.h"

#include "atlcomcli.h"  
#import "J:\\FirstCOM.dll" no_namespace

int _tmain(int argc, _TCHAR* argv[])  
{  
	CoInitialize(NULL);  
	CLSID clsid;  
	CLSIDFromProgID(OLESTR("FirstCOM.math.1"),&clsid);  
	CComPtr<IFirstClass> pFirstClass;//����ָ��  
	pFirstClass.CoCreateInstance(clsid);  
	long ret = pFirstClass->Add(1,2);  
	printf("%d\n",ret);  
	pFirstClass.Release();  
	CoUninitialize();  

	return 0;  
} 

