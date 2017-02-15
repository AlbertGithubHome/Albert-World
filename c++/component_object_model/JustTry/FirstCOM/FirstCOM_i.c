

/* this ALWAYS GENERATED file contains the IIDs and CLSIDs */

/* link this file in with the server and any clients */


 /* File created by MIDL compiler version 7.00.0500 */
/* at Thu Feb 25 14:07:28 2016
 */
/* Compiler settings for .\.\FirstCOM.idl:
    Oicf, W1, Zp8, env=Win32 (32b run)
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
//@@MIDL_FILE_HEADING(  )

#pragma warning( disable: 4049 )  /* more than 64k source lines */


#ifdef __cplusplus
extern "C"{
#endif 


#include <rpc.h>
#include <rpcndr.h>

#ifdef _MIDL_USE_GUIDDEF_

#ifndef INITGUID
#define INITGUID
#include <guiddef.h>
#undef INITGUID
#else
#include <guiddef.h>
#endif

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        DEFINE_GUID(name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8)

#else // !_MIDL_USE_GUIDDEF_

#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

#define MIDL_DEFINE_GUID(type,name,l,w1,w2,b1,b2,b3,b4,b5,b6,b7,b8) \
        const type name = {l,w1,w2,{b1,b2,b3,b4,b5,b6,b7,b8}}

#endif !_MIDL_USE_GUIDDEF_

MIDL_DEFINE_GUID(IID, IID_IComponentRegistrar,0xa817e7a2,0x43fa,0x11d0,0x9e,0x44,0x00,0xaa,0x00,0xb6,0x77,0x0a);


MIDL_DEFINE_GUID(IID, IID_IFirstClass,0x4E7BE470,0x309E,0x431F,0x9A,0xC8,0xE9,0x73,0xF7,0xEA,0xCB,0x5F);


MIDL_DEFINE_GUID(IID, LIBID_FirstCOMLib,0xE8ED724F,0xCAA8,0x4595,0x9D,0xFD,0x1B,0xD1,0x81,0x05,0xCE,0x22);


MIDL_DEFINE_GUID(CLSID, CLSID_CompReg,0x3CA226EA,0xD79C,0x4668,0xBF,0xBF,0xCA,0x1B,0x48,0x37,0x0F,0x2F);


MIDL_DEFINE_GUID(CLSID, CLSID_FirstClass,0x231DCFA3,0x061F,0x4671,0x84,0xCC,0xF4,0x69,0xE4,0xBC,0xB5,0xEB);

#undef MIDL_DEFINE_GUID

#ifdef __cplusplus
}
#endif



