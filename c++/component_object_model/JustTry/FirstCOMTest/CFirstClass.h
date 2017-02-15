// 从类型库向导中用“添加类”创建的计算机生成的 IDispatch 包装类

#import "F:\\FirstCOM.dll" no_namespace
// CFirstClass 包装类

class CFirstClass : public COleDispatchDriver
{
public:
	CFirstClass(){} // 调用 COleDispatchDriver 默认构造函数
	CFirstClass(LPDISPATCH pDispatch) : COleDispatchDriver(pDispatch) {}
	CFirstClass(const CFirstClass& dispatchSrc) : COleDispatchDriver(dispatchSrc) {}

	// 属性
public:

	// 操作
public:


	// IFirstClass 方法
public:
	long Add(long para1, long para2)
	{
		long result;
		static BYTE parms[] = VTS_I4 VTS_I4 ;
		InvokeHelper(0x1, DISPATCH_METHOD, VT_I4, (void*)&result, parms, para1, para2);
		return result;
	}

	// IFirstClass 属性
public:

};
