# `linuxVirtualMachineScaleSet` Submodule <a name="`linuxVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxVirtualMachineScaleSet <a name="LinuxVirtualMachineScaleSet" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set azurestack_linux_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_username: str,
  instances: typing.Union[int, float],
  location: str,
  name: str,
  network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]],
  os_disk: LinuxVirtualMachineScaleSetOsDisk,
  resource_group_name: str,
  sku: str,
  additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities = None,
  admin_password: str = None,
  admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]] = None,
  automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair = None,
  automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy = None,
  boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics = None,
  computer_name_prefix: str = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]] = None,
  disable_password_authentication: typing.Union[bool, IResolvable] = None,
  do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable] = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]] = None,
  health_probe_id: str = None,
  id: str = None,
  overprovision: typing.Union[bool, IResolvable] = None,
  plan: LinuxVirtualMachineScaleSetPlan = None,
  platform_fault_domain_count: typing.Union[int, float] = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  scale_in_policy: str = None,
  secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]] = None,
  single_placement_group: typing.Union[bool, IResolvable] = None,
  source_image_id: str = None,
  source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference = None,
  tags: typing.Mapping[str] = None,
  terminate_notification: LinuxVirtualMachineScaleSetTerminateNotification = None,
  timeouts: LinuxVirtualMachineScaleSetTimeouts = None,
  upgrade_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminSshKey">admin_ssh_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.healthProbeId">health_probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scaleInPolicy">scale_in_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#scale_in_policy LinuxVirtualMachineScaleSet#scale_in_policy}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.terminateNotification">terminate_notification</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a></code> | terminate_notification block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.upgradeMode">upgrade_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}.

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_interface LinuxVirtualMachineScaleSet#network_interface}

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#os_disk LinuxVirtualMachineScaleSet#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#additional_capabilities LinuxVirtualMachineScaleSet#additional_capabilities}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}.

---

##### `admin_ssh_key`<sup>Optional</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminSshKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_ssh_key LinuxVirtualMachineScaleSet#admin_ssh_key}

---

##### `automatic_instance_repair`<sup>Optional</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticInstanceRepair"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_instance_repair LinuxVirtualMachineScaleSet#automatic_instance_repair}

---

##### `automatic_os_upgrade_policy`<sup>Optional</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticOsUpgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_os_upgrade_policy LinuxVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#boot_diagnostics LinuxVirtualMachineScaleSet#boot_diagnostics}

---

##### `computer_name_prefix`<sup>Optional</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.computerNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#data_disk LinuxVirtualMachineScaleSet#data_disk}

---

##### `disable_password_authentication`<sup>Optional</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.disablePasswordAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}.

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.doNotRunExtensionsOnOverprovisionedMachines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#extension LinuxVirtualMachineScaleSet#extension}

---

##### `health_probe_id`<sup>Optional</sup> <a name="health_probe_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.healthProbeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overprovision`<sup>Optional</sup> <a name="overprovision" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.overprovision"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#plan LinuxVirtualMachineScaleSet#plan}

---

##### `platform_fault_domain_count`<sup>Optional</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.platformFaultDomainCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisionVmAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}.

---

##### `scale_in_policy`<sup>Optional</sup> <a name="scale_in_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scaleInPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#scale_in_policy LinuxVirtualMachineScaleSet#scale_in_policy}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#secret LinuxVirtualMachineScaleSet#secret}

---

##### `single_placement_group`<sup>Optional</sup> <a name="single_placement_group" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.singlePlacementGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}.

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_reference LinuxVirtualMachineScaleSet#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}.

---

##### `terminate_notification`<sup>Optional</sup> <a name="terminate_notification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.terminateNotification"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a>

terminate_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#terminate_notification LinuxVirtualMachineScaleSet#terminate_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeouts LinuxVirtualMachineScaleSet#timeouts}

---

##### `upgrade_mode`<sup>Optional</sup> <a name="upgrade_mode" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.upgradeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities">put_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey">put_admin_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair">put_automatic_instance_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy">put_automatic_os_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics">put_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk">put_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk">put_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference">put_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminateNotification">put_terminate_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdditionalCapabilities">reset_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminSshKey">reset_admin_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticInstanceRepair">reset_automatic_instance_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy">reset_automatic_os_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetBootDiagnostics">reset_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetComputerNamePrefix">reset_computer_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDataDisk">reset_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDisablePasswordAuthentication">reset_disable_password_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines">reset_do_not_run_extensions_on_overprovisioned_machines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHealthProbeId">reset_health_probe_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverprovision">reset_overprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlatformFaultDomainCount">reset_platform_fault_domain_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProvisionVmAgent">reset_provision_vm_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetScaleInPolicy">reset_scale_in_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSinglePlacementGroup">reset_single_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageId">reset_source_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageReference">reset_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTerminateNotification">reset_terminate_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUpgradeMode">reset_upgrade_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_capabilities` <a name="put_additional_capabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities"></a>

```python
def put_additional_capabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities.parameter.ultraSsdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}.

---

##### `put_admin_ssh_key` <a name="put_admin_ssh_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey"></a>

```python
def put_admin_ssh_key(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---

##### `put_automatic_instance_repair` <a name="put_automatic_instance_repair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair"></a>

```python
def put_automatic_instance_repair(
  enabled: typing.Union[bool, IResolvable],
  grace_period: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

###### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.gracePeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}.

---

##### `put_automatic_os_upgrade_policy` <a name="put_automatic_os_upgrade_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy"></a>

```python
def put_automatic_os_upgrade_policy(
  disable_automatic_rollback: typing.Union[bool, IResolvable],
  enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
) -> None
```

###### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.disableAutomaticRollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}.

---

###### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.enableAutomaticOsUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

##### `put_boot_diagnostics` <a name="put_boot_diagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics"></a>

```python
def put_boot_diagnostics(
  storage_account_uri: str
) -> None
```

###### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics.parameter.storageAccountUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}.

---

##### `put_data_disk` <a name="put_data_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk"></a>

```python
def put_data_disk(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension"></a>

```python
def put_extension(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---

##### `put_os_disk` <a name="put_os_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk"></a>

```python
def put_os_disk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

###### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.storageAccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

###### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diffDiskSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#diff_disk_settings LinuxVirtualMachineScaleSet#diff_disk_settings}

---

###### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

###### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---

##### `put_source_image_reference` <a name="put_source_image_reference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference"></a>

```python
def put_source_image_reference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

##### `put_terminate_notification` <a name="put_terminate_notification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminateNotification"></a>

```python
def put_terminate_notification(
  enabled: typing.Union[bool, IResolvable],
  timeout: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminateNotification.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminateNotification.parameter.timeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}.

---

##### `reset_additional_capabilities` <a name="reset_additional_capabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdditionalCapabilities"></a>

```python
def reset_additional_capabilities() -> None
```

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_ssh_key` <a name="reset_admin_ssh_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminSshKey"></a>

```python
def reset_admin_ssh_key() -> None
```

##### `reset_automatic_instance_repair` <a name="reset_automatic_instance_repair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticInstanceRepair"></a>

```python
def reset_automatic_instance_repair() -> None
```

##### `reset_automatic_os_upgrade_policy` <a name="reset_automatic_os_upgrade_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy"></a>

```python
def reset_automatic_os_upgrade_policy() -> None
```

##### `reset_boot_diagnostics` <a name="reset_boot_diagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetBootDiagnostics"></a>

```python
def reset_boot_diagnostics() -> None
```

##### `reset_computer_name_prefix` <a name="reset_computer_name_prefix" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetComputerNamePrefix"></a>

```python
def reset_computer_name_prefix() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_data_disk` <a name="reset_data_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDataDisk"></a>

```python
def reset_data_disk() -> None
```

##### `reset_disable_password_authentication` <a name="reset_disable_password_authentication" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDisablePasswordAuthentication"></a>

```python
def reset_disable_password_authentication() -> None
```

##### `reset_do_not_run_extensions_on_overprovisioned_machines` <a name="reset_do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines"></a>

```python
def reset_do_not_run_extensions_on_overprovisioned_machines() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_health_probe_id` <a name="reset_health_probe_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHealthProbeId"></a>

```python
def reset_health_probe_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_overprovision` <a name="reset_overprovision" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverprovision"></a>

```python
def reset_overprovision() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_platform_fault_domain_count` <a name="reset_platform_fault_domain_count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlatformFaultDomainCount"></a>

```python
def reset_platform_fault_domain_count() -> None
```

##### `reset_provision_vm_agent` <a name="reset_provision_vm_agent" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProvisionVmAgent"></a>

```python
def reset_provision_vm_agent() -> None
```

##### `reset_scale_in_policy` <a name="reset_scale_in_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetScaleInPolicy"></a>

```python
def reset_scale_in_policy() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_single_placement_group` <a name="reset_single_placement_group" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```python
def reset_single_placement_group() -> None
```

##### `reset_source_image_id` <a name="reset_source_image_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageId"></a>

```python
def reset_source_image_id() -> None
```

##### `reset_source_image_reference` <a name="reset_source_image_reference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageReference"></a>

```python
def reset_source_image_reference() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_terminate_notification` <a name="reset_terminate_notification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTerminateNotification"></a>

```python
def reset_terminate_notification() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_mode` <a name="reset_upgrade_mode" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUpgradeMode"></a>

```python
def reset_upgrade_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LinuxVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LinuxVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LinuxVirtualMachineScaleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LinuxVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LinuxVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKey">admin_ssh_key</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList">LinuxVirtualMachineScaleSetAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference">LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList">LinuxVirtualMachineScaleSetDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList">LinuxVirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList">LinuxVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference">LinuxVirtualMachineScaleSetOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference">LinuxVirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList">LinuxVirtualMachineScaleSetSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference">LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminateNotification">terminate_notification</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference">LinuxVirtualMachineScaleSetTerminateNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference">LinuxVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilitiesInput">additional_capabilities_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKeyInput">admin_ssh_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepairInput">automatic_instance_repair_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput">automatic_os_upgrade_policy_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnosticsInput">boot_diagnostics_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefixInput">computer_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDiskInput">data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthenticationInput">disable_password_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput">do_not_run_extensions_on_overprovisioned_machines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionInput">extension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeIdInput">health_probe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDiskInput">os_disk_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovisionInput">overprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCountInput">platform_fault_domain_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgentInput">provision_vm_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInPolicyInput">scale_in_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroupInput">single_placement_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageIdInput">source_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReferenceInput">source_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminateNotificationInput">terminate_notification_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeModeInput">upgrade_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeId">health_probe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInPolicy">scale_in_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeMode">upgrade_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_capabilities`<sup>Required</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilities"></a>

```python
additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a>

---

##### `admin_ssh_key`<sup>Required</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKey"></a>

```python
admin_ssh_key: LinuxVirtualMachineScaleSetAdminSshKeyList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList">LinuxVirtualMachineScaleSetAdminSshKeyList</a>

---

##### `automatic_instance_repair`<sup>Required</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepair"></a>

```python
automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a>

---

##### `automatic_os_upgrade_policy`<sup>Required</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicy"></a>

```python
automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a>

---

##### `boot_diagnostics`<sup>Required</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnostics"></a>

```python
boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference">LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDisk"></a>

```python
data_disk: LinuxVirtualMachineScaleSetDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList">LinuxVirtualMachineScaleSetDataDiskList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extension"></a>

```python
extension: LinuxVirtualMachineScaleSetExtensionList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList">LinuxVirtualMachineScaleSetExtensionList</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterface"></a>

```python
network_interface: LinuxVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList">LinuxVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDisk"></a>

```python
os_disk: LinuxVirtualMachineScaleSetOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference">LinuxVirtualMachineScaleSetOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.plan"></a>

```python
plan: LinuxVirtualMachineScaleSetPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference">LinuxVirtualMachineScaleSetPlanOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secret"></a>

```python
secret: LinuxVirtualMachineScaleSetSecretList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList">LinuxVirtualMachineScaleSetSecretList</a>

---

##### `source_image_reference`<sup>Required</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReference"></a>

```python
source_image_reference: LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference">LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference</a>

---

##### `terminate_notification`<sup>Required</sup> <a name="terminate_notification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminateNotification"></a>

```python
terminate_notification: LinuxVirtualMachineScaleSetTerminateNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference">LinuxVirtualMachineScaleSetTerminateNotificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeouts"></a>

```python
timeouts: LinuxVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference">LinuxVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `additional_capabilities_input`<sup>Optional</sup> <a name="additional_capabilities_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilitiesInput"></a>

```python
additional_capabilities_input: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_ssh_key_input`<sup>Optional</sup> <a name="admin_ssh_key_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKeyInput"></a>

```python
admin_ssh_key_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `automatic_instance_repair_input`<sup>Optional</sup> <a name="automatic_instance_repair_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepairInput"></a>

```python
automatic_instance_repair_input: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `automatic_os_upgrade_policy_input`<sup>Optional</sup> <a name="automatic_os_upgrade_policy_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput"></a>

```python
automatic_os_upgrade_policy_input: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `boot_diagnostics_input`<sup>Optional</sup> <a name="boot_diagnostics_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```python
boot_diagnostics_input: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

---

##### `computer_name_prefix_input`<sup>Optional</sup> <a name="computer_name_prefix_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefixInput"></a>

```python
computer_name_prefix_input: str
```

- *Type:* str

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDiskInput"></a>

```python
data_disk_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---

##### `disable_password_authentication_input`<sup>Optional</sup> <a name="disable_password_authentication_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthenticationInput"></a>

```python
disable_password_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `do_not_run_extensions_on_overprovisioned_machines_input`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput"></a>

```python
do_not_run_extensions_on_overprovisioned_machines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionInput"></a>

```python
extension_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---

##### `health_probe_id_input`<sup>Optional</sup> <a name="health_probe_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeIdInput"></a>

```python
health_probe_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---

##### `os_disk_input`<sup>Optional</sup> <a name="os_disk_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDiskInput"></a>

```python
os_disk_input: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

---

##### `overprovision_input`<sup>Optional</sup> <a name="overprovision_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovisionInput"></a>

```python
overprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.planInput"></a>

```python
plan_input: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

---

##### `platform_fault_domain_count_input`<sup>Optional</sup> <a name="platform_fault_domain_count_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCountInput"></a>

```python
platform_fault_domain_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provision_vm_agent_input`<sup>Optional</sup> <a name="provision_vm_agent_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgentInput"></a>

```python
provision_vm_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scale_in_policy_input`<sup>Optional</sup> <a name="scale_in_policy_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInPolicyInput"></a>

```python
scale_in_policy_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---

##### `single_placement_group_input`<sup>Optional</sup> <a name="single_placement_group_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```python
single_placement_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `source_image_id_input`<sup>Optional</sup> <a name="source_image_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageIdInput"></a>

```python
source_image_id_input: str
```

- *Type:* str

---

##### `source_image_reference_input`<sup>Optional</sup> <a name="source_image_reference_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReferenceInput"></a>

```python
source_image_reference_input: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `terminate_notification_input`<sup>Optional</sup> <a name="terminate_notification_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminateNotificationInput"></a>

```python
terminate_notification_input: LinuxVirtualMachineScaleSetTerminateNotification
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LinuxVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]

---

##### `upgrade_mode_input`<sup>Optional</sup> <a name="upgrade_mode_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeModeInput"></a>

```python
upgrade_mode_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `computer_name_prefix`<sup>Required</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefix"></a>

```python
computer_name_prefix: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `disable_password_authentication`<sup>Required</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Required</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```python
do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_probe_id`<sup>Required</sup> <a name="health_probe_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeId"></a>

```python
health_probe_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overprovision`<sup>Required</sup> <a name="overprovision" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovision"></a>

```python
overprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform_fault_domain_count`<sup>Required</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCount"></a>

```python
platform_fault_domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provision_vm_agent`<sup>Required</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scale_in_policy`<sup>Required</sup> <a name="scale_in_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInPolicy"></a>

```python
scale_in_policy: str
```

- *Type:* str

---

##### `single_placement_group`<sup>Required</sup> <a name="single_placement_group" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroup"></a>

```python
single_placement_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `upgrade_mode`<sup>Required</sup> <a name="upgrade_mode" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeMode"></a>

```python
upgrade_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxVirtualMachineScaleSetAdditionalCapabilities <a name="LinuxVirtualMachineScaleSetAdditionalCapabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}. |

---

##### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}.

---

### LinuxVirtualMachineScaleSetAdminSshKey <a name="LinuxVirtualMachineScaleSetAdminSshKey" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey(
  public_key: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#public_key LinuxVirtualMachineScaleSet#public_key}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#username LinuxVirtualMachineScaleSet#username}. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#public_key LinuxVirtualMachineScaleSet#public_key}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#username LinuxVirtualMachineScaleSet#username}.

---

### LinuxVirtualMachineScaleSetAutomaticInstanceRepair <a name="LinuxVirtualMachineScaleSetAutomaticInstanceRepair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair(
  enabled: typing.Union[bool, IResolvable],
  grace_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod">grace_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}.

---

### LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy <a name="LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy(
  disable_automatic_rollback: typing.Union[bool, IResolvable],
  enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback">disable_automatic_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade">enable_automatic_os_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}. |

---

##### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback"></a>

```python
disable_automatic_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}.

---

##### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade"></a>

```python
enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

### LinuxVirtualMachineScaleSetBootDiagnostics <a name="LinuxVirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics(
  storage_account_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}. |

---

##### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}.

---

### LinuxVirtualMachineScaleSetConfig <a name="LinuxVirtualMachineScaleSetConfig" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_username: str,
  instances: typing.Union[int, float],
  location: str,
  name: str,
  network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]],
  os_disk: LinuxVirtualMachineScaleSetOsDisk,
  resource_group_name: str,
  sku: str,
  additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities = None,
  admin_password: str = None,
  admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]] = None,
  automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair = None,
  automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy = None,
  boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics = None,
  computer_name_prefix: str = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]] = None,
  disable_password_authentication: typing.Union[bool, IResolvable] = None,
  do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable] = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]] = None,
  health_probe_id: str = None,
  id: str = None,
  overprovision: typing.Union[bool, IResolvable] = None,
  plan: LinuxVirtualMachineScaleSetPlan = None,
  platform_fault_domain_count: typing.Union[int, float] = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  scale_in_policy: str = None,
  secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]] = None,
  single_placement_group: typing.Union[bool, IResolvable] = None,
  source_image_id: str = None,
  source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference = None,
  tags: typing.Mapping[str] = None,
  terminate_notification: LinuxVirtualMachineScaleSetTerminateNotification = None,
  timeouts: LinuxVirtualMachineScaleSetTimeouts = None,
  upgrade_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminSshKey">admin_ssh_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.healthProbeId">health_probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.scaleInPolicy">scale_in_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#scale_in_policy LinuxVirtualMachineScaleSet#scale_in_policy}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.terminateNotification">terminate_notification</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a></code> | terminate_notification block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.upgradeMode">upgrade_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}.

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_interface LinuxVirtualMachineScaleSet#network_interface}

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.osDisk"></a>

```python
os_disk: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#os_disk LinuxVirtualMachineScaleSet#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.additionalCapabilities"></a>

```python
additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#additional_capabilities LinuxVirtualMachineScaleSet#additional_capabilities}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}.

---

##### `admin_ssh_key`<sup>Optional</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminSshKey"></a>

```python
admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#admin_ssh_key LinuxVirtualMachineScaleSet#admin_ssh_key}

---

##### `automatic_instance_repair`<sup>Optional</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticInstanceRepair"></a>

```python
automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_instance_repair LinuxVirtualMachineScaleSet#automatic_instance_repair}

---

##### `automatic_os_upgrade_policy`<sup>Optional</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy"></a>

```python
automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_os_upgrade_policy LinuxVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```python
boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#boot_diagnostics LinuxVirtualMachineScaleSet#boot_diagnostics}

---

##### `computer_name_prefix`<sup>Optional</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.computerNamePrefix"></a>

```python
computer_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dataDisk"></a>

```python
data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#data_disk LinuxVirtualMachineScaleSet#data_disk}

---

##### `disable_password_authentication`<sup>Optional</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}.

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```python
do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extension"></a>

```python
extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#extension LinuxVirtualMachineScaleSet#extension}

---

##### `health_probe_id`<sup>Optional</sup> <a name="health_probe_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.healthProbeId"></a>

```python
health_probe_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overprovision`<sup>Optional</sup> <a name="overprovision" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.overprovision"></a>

```python
overprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.plan"></a>

```python
plan: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#plan LinuxVirtualMachineScaleSet#plan}

---

##### `platform_fault_domain_count`<sup>Optional</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.platformFaultDomainCount"></a>

```python
platform_fault_domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}.

---

##### `scale_in_policy`<sup>Optional</sup> <a name="scale_in_policy" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.scaleInPolicy"></a>

```python
scale_in_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#scale_in_policy LinuxVirtualMachineScaleSet#scale_in_policy}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#secret LinuxVirtualMachineScaleSet#secret}

---

##### `single_placement_group`<sup>Optional</sup> <a name="single_placement_group" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```python
single_placement_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}.

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageReference"></a>

```python
source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#source_image_reference LinuxVirtualMachineScaleSet#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}.

---

##### `terminate_notification`<sup>Optional</sup> <a name="terminate_notification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.terminateNotification"></a>

```python
terminate_notification: LinuxVirtualMachineScaleSetTerminateNotification
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a>

terminate_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#terminate_notification LinuxVirtualMachineScaleSet#terminate_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.timeouts"></a>

```python
timeouts: LinuxVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeouts LinuxVirtualMachineScaleSet#timeouts}

---

##### `upgrade_mode`<sup>Optional</sup> <a name="upgrade_mode" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.upgradeMode"></a>

```python
upgrade_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}.

---

### LinuxVirtualMachineScaleSetDataDisk <a name="LinuxVirtualMachineScaleSetDataDisk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk(
  caching: str,
  disk_size_gb: typing.Union[int, float],
  lun: typing.Union[int, float],
  storage_account_type: str,
  create_option: str = None,
  disk_encryption_set_id: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#lun LinuxVirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create_option LinuxVirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#lun LinuxVirtualMachineScaleSet#lun}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

##### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create_option LinuxVirtualMachineScaleSet#create_option}.

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

### LinuxVirtualMachineScaleSetExtension <a name="LinuxVirtualMachineScaleSetExtension" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension(
  name: str,
  publisher: str,
  type: str,
  type_handler_version: str,
  automatic_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  auto_upgrade_minor_version: typing.Union[bool, IResolvable] = None,
  force_update_tag: str = None,
  protected_settings: str = None,
  provision_after_extensions: typing.List[str] = None,
  settings: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type_handler_version LinuxVirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_upgrade_enabled LinuxVirtualMachineScaleSet#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#auto_upgrade_minor_version LinuxVirtualMachineScaleSet#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#force_update_tag LinuxVirtualMachineScaleSet#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#protected_settings LinuxVirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_after_extensions LinuxVirtualMachineScaleSet#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#settings LinuxVirtualMachineScaleSet#settings}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#type_handler_version LinuxVirtualMachineScaleSet#type_handler_version}.

---

##### `automatic_upgrade_enabled`<sup>Optional</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#automatic_upgrade_enabled LinuxVirtualMachineScaleSet#automatic_upgrade_enabled}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#auto_upgrade_minor_version LinuxVirtualMachineScaleSet#auto_upgrade_minor_version}.

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#force_update_tag LinuxVirtualMachineScaleSet#force_update_tag}.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#protected_settings LinuxVirtualMachineScaleSet#protected_settings}.

---

##### `provision_after_extensions`<sup>Optional</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#provision_after_extensions LinuxVirtualMachineScaleSet#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.settings"></a>

```python
settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#settings LinuxVirtualMachineScaleSet#settings}.

---

### LinuxVirtualMachineScaleSetNetworkInterface <a name="LinuxVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface(
  ip_configuration: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]],
  name: str,
  dns_servers: typing.List[str] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  network_security_group_id: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#dns_servers LinuxVirtualMachineScaleSet#dns_servers}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_ip_forwarding LinuxVirtualMachineScaleSet#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_security_group_id LinuxVirtualMachineScaleSet#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}. |

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.ipConfiguration"></a>

```python
ip_configuration: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#ip_configuration LinuxVirtualMachineScaleSet#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#dns_servers LinuxVirtualMachineScaleSet#dns_servers}.

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enable_ip_forwarding LinuxVirtualMachineScaleSet#enable_ip_forwarding}.

---

##### `network_security_group_id`<sup>Optional</sup> <a name="network_security_group_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#network_security_group_id LinuxVirtualMachineScaleSet#network_security_group_id}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}.

---

### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration(
  name: str,
  load_balancer_backend_address_pool_ids: typing.List[str] = None,
  load_balancer_inbound_nat_rules_ids: typing.List[str] = None,
  primary: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds">load_balancer_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_backend_address_pool_ids LinuxVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds">load_balancer_inbound_nat_rules_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids LinuxVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#subnet_id LinuxVirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `load_balancer_backend_address_pool_ids`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```python
load_balancer_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_backend_address_pool_ids LinuxVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `load_balancer_inbound_nat_rules_ids`<sup>Optional</sup> <a name="load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds"></a>

```python
load_balancer_inbound_nat_rules_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids LinuxVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#subnet_id LinuxVirtualMachineScaleSet#subnet_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

### LinuxVirtualMachineScaleSetOsDisk <a name="LinuxVirtualMachineScaleSetOsDisk" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

##### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diffDiskSettings"></a>

```python
diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#diff_disk_settings LinuxVirtualMachineScaleSet#diff_disk_settings}

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

### LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings <a name="LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings(
  option: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option">option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option"></a>

```python
option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}.

---

### LinuxVirtualMachineScaleSetPlan <a name="LinuxVirtualMachineScaleSetPlan" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan(
  name: str,
  product: str,
  publisher: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

### LinuxVirtualMachineScaleSetSecret <a name="LinuxVirtualMachineScaleSetSecret" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret(
  certificate: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]],
  key_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#key_vault_id LinuxVirtualMachineScaleSet#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#certificate LinuxVirtualMachineScaleSet#certificate}

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#key_vault_id LinuxVirtualMachineScaleSet#key_vault_id}.

---

### LinuxVirtualMachineScaleSetSecretCertificate <a name="LinuxVirtualMachineScaleSetSecretCertificate" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate()
```


### LinuxVirtualMachineScaleSetSourceImageReference <a name="LinuxVirtualMachineScaleSetSourceImageReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

### LinuxVirtualMachineScaleSetTerminateNotification <a name="LinuxVirtualMachineScaleSetTerminateNotification" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification(
  enabled: typing.Union[bool, IResolvable],
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification.property.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

### LinuxVirtualMachineScaleSetTimeouts <a name="LinuxVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference <a name="LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">reset_ultra_ssd_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ultra_ssd_enabled` <a name="reset_ultra_ssd_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```python
def reset_ultra_ssd_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultra_ssd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ultra_ssd_enabled_input`<sup>Optional</sup> <a name="ultra_ssd_enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```python
ultra_ssd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

---


### LinuxVirtualMachineScaleSetAdminSshKeyList <a name="LinuxVirtualMachineScaleSetAdminSshKeyList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetAdminSshKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---


### LinuxVirtualMachineScaleSetAdminSshKeyOutputReference <a name="LinuxVirtualMachineScaleSetAdminSshKeyOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetAdminSshKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]

---


### LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference <a name="LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod">grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

---


### LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference <a name="LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput">disable_automatic_rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput">enable_automatic_os_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback">disable_automatic_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade">enable_automatic_os_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_automatic_rollback_input`<sup>Optional</sup> <a name="disable_automatic_rollback_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput"></a>

```python
disable_automatic_rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_os_upgrade_input`<sup>Optional</sup> <a name="enable_automatic_os_upgrade_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput"></a>

```python
enable_automatic_os_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback"></a>

```python
disable_automatic_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade"></a>

```python
enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---


### LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference <a name="LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput">storage_account_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_account_uri_input`<sup>Optional</sup> <a name="storage_account_uri_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```python
storage_account_uri_input: str
```

- *Type:* str

---

##### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

---


### LinuxVirtualMachineScaleSetDataDiskList <a name="LinuxVirtualMachineScaleSetDataDiskList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---


### LinuxVirtualMachineScaleSetDataDiskOutputReference <a name="LinuxVirtualMachineScaleSetDataDiskOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption">reset_create_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_option` <a name="reset_create_option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption"></a>

```python
def reset_create_option() -> None
```

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetDataDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]

---


### LinuxVirtualMachineScaleSetExtensionList <a name="LinuxVirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---


### LinuxVirtualMachineScaleSetExtensionOutputReference <a name="LinuxVirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled">reset_automatic_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion">reset_auto_upgrade_minor_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag">reset_force_update_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions">reset_provision_after_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_automatic_upgrade_enabled` <a name="reset_automatic_upgrade_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled"></a>

```python
def reset_automatic_upgrade_enabled() -> None
```

##### `reset_auto_upgrade_minor_version` <a name="reset_auto_upgrade_minor_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion"></a>

```python
def reset_auto_upgrade_minor_version() -> None
```

##### `reset_force_update_tag` <a name="reset_force_update_tag" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag"></a>

```python
def reset_force_update_tag() -> None
```

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_provision_after_extensions` <a name="reset_provision_after_extensions" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions"></a>

```python
def reset_provision_after_extensions() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput">automatic_upgrade_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput">auto_upgrade_minor_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput">force_update_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">protected_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput">provision_after_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">type_handler_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled_input`<sup>Optional</sup> <a name="automatic_upgrade_enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput"></a>

```python
automatic_upgrade_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version_input`<sup>Optional</sup> <a name="auto_upgrade_minor_version_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput"></a>

```python
auto_upgrade_minor_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_tag_input`<sup>Optional</sup> <a name="force_update_tag_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput"></a>

```python
force_update_tag_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```python
protected_settings_input: str
```

- *Type:* str

---

##### `provision_after_extensions_input`<sup>Optional</sup> <a name="provision_after_extensions_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput"></a>

```python
provision_after_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `type_handler_version_input`<sup>Optional</sup> <a name="type_handler_version_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```python
type_handler_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled`<sup>Required</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_tag`<sup>Required</sup> <a name="force_update_tag" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `provision_after_extensions`<sup>Required</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetExtension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds">reset_load_balancer_backend_address_pool_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds">reset_load_balancer_inbound_nat_rules_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_load_balancer_backend_address_pool_ids` <a name="reset_load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```python
def reset_load_balancer_backend_address_pool_ids() -> None
```

##### `reset_load_balancer_inbound_nat_rules_ids` <a name="reset_load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds"></a>

```python
def reset_load_balancer_inbound_nat_rules_ids() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">load_balancer_backend_address_pool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput">load_balancer_inbound_nat_rules_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">load_balancer_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">load_balancer_inbound_nat_rules_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer_backend_address_pool_ids_input`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_ids_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```python
load_balancer_backend_address_pool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_inbound_nat_rules_ids_input`<sup>Optional</sup> <a name="load_balancer_inbound_nat_rules_ids_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput"></a>

```python
load_balancer_inbound_nat_rules_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `load_balancer_backend_address_pool_ids`<sup>Required</sup> <a name="load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```python
load_balancer_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_inbound_nat_rules_ids`<sup>Required</sup> <a name="load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```python
load_balancer_inbound_nat_rules_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId">reset_network_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration"></a>

```python
def put_ip_configuration(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_network_security_group_id` <a name="reset_network_security_group_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId"></a>

```python
def reset_network_security_group_id() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput"></a>

```python
ip_configuration_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]

---


### LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference <a name="LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput">option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```python
option_input: str
```

- *Type:* str

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```python
option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---


### LinuxVirtualMachineScaleSetOsDiskOutputReference <a name="LinuxVirtualMachineScaleSetOsDiskOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings">put_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings">reset_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_diff_disk_settings` <a name="put_diff_disk_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings"></a>

```python
def put_diff_disk_settings(
  option: str
) -> None
```

###### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.option"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}.

---

##### `reset_diff_disk_settings` <a name="reset_diff_disk_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings"></a>

```python
def reset_diff_disk_settings() -> None
```

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput">diff_disk_settings_input</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diff_disk_settings`<sup>Required</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings"></a>

```python
diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `diff_disk_settings_input`<sup>Optional</sup> <a name="diff_disk_settings_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```python
diff_disk_settings_input: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

---


### LinuxVirtualMachineScaleSetPlanOutputReference <a name="LinuxVirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

---


### LinuxVirtualMachineScaleSetSecretCertificateList <a name="LinuxVirtualMachineScaleSetSecretCertificateList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---


### LinuxVirtualMachineScaleSetSecretCertificateOutputReference <a name="LinuxVirtualMachineScaleSetSecretCertificateOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetSecretCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]

---


### LinuxVirtualMachineScaleSetSecretList <a name="LinuxVirtualMachineScaleSetSecretList" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---


### LinuxVirtualMachineScaleSetSecretOutputReference <a name="LinuxVirtualMachineScaleSetSecretOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate">put_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList">LinuxVirtualMachineScaleSetSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificate"></a>

```python
certificate: LinuxVirtualMachineScaleSetSecretCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList">LinuxVirtualMachineScaleSetSecretCertificateList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]

---


### LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference <a name="LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

---


### LinuxVirtualMachineScaleSetTerminateNotificationOutputReference <a name="LinuxVirtualMachineScaleSetTerminateNotificationOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotificationOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetTerminateNotification
```

- *Type:* <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminateNotification">LinuxVirtualMachineScaleSetTerminateNotification</a>

---


### LinuxVirtualMachineScaleSetTimeoutsOutputReference <a name="LinuxVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]

---



