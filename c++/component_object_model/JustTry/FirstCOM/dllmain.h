// dllmain.h : 模块类的声明。

class CFirstCOMModule : public CAtlDllModuleT< CFirstCOMModule >
{
public :
	DECLARE_LIBID(LIBID_FirstCOMLib)
	DECLARE_REGISTRY_APPID_RESOURCEID(IDR_FIRSTCOM, "{E7075ECE-2ED2-445A-9665-AE36671C4A8B}")
};

extern class CFirstCOMModule _AtlModule;
