// FirstCOMTest.h : PROJECT_NAME Ӧ�ó������ͷ�ļ�
//

#pragma once

#ifndef __AFXWIN_H__
	#error "�ڰ������ļ�֮ǰ������stdafx.h�������� PCH �ļ�"
#endif

#include "resource.h"		// ������


// CFirstCOMTestApp:
// �йش����ʵ�֣������ FirstCOMTest.cpp
//

class CFirstCOMTestApp : public CWinApp
{
public:
	CFirstCOMTestApp();

// ��д
	public:
	virtual BOOL InitInstance();

// ʵ��

	DECLARE_MESSAGE_MAP()
};

extern CFirstCOMTestApp theApp;