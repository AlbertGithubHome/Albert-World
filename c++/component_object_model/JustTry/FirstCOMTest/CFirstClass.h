// �����Ϳ������á�����ࡱ�����ļ�������ɵ� IDispatch ��װ��

#import "F:\\FirstCOM.dll" no_namespace
// CFirstClass ��װ��

class CFirstClass : public COleDispatchDriver
{
public:
	CFirstClass(){} // ���� COleDispatchDriver Ĭ�Ϲ��캯��
	CFirstClass(LPDISPATCH pDispatch) : COleDispatchDriver(pDispatch) {}
	CFirstClass(const CFirstClass& dispatchSrc) : COleDispatchDriver(dispatchSrc) {}

	// ����
public:

	// ����
public:


	// IFirstClass ����
public:
	long Add(long para1, long para2)
	{
		long result;
		static BYTE parms[] = VTS_I4 VTS_I4 ;
		InvokeHelper(0x1, DISPATCH_METHOD, VT_I4, (void*)&result, parms, para1, para2);
		return result;
	}

	// IFirstClass ����
public:

};
