# `windowsVirtualMachine` Submodule <a name="`windowsVirtualMachine` Submodule" id="@cdktf/provider-azurestack.windowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachine <a name="WindowsVirtualMachine" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine azurestack_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_password: str,
  admin_username: str,
  location: str,
  name: str,
  network_interface_ids: typing.List[str],
  os_disk: WindowsVirtualMachineOsDisk,
  resource_group_name: str,
  size: str,
  additional_capabilities: WindowsVirtualMachineAdditionalCapabilities = None,
  additional_unattend_content: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]] = None,
  allow_extension_operations: typing.Union[bool, IResolvable] = None,
  availability_set_id: str = None,
  boot_diagnostics: WindowsVirtualMachineBootDiagnostics = None,
  computer_name: str = None,
  custom_data: str = None,
  enable_automatic_updates: typing.Union[bool, IResolvable] = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  eviction_policy: str = None,
  extensions_time_budget: str = None,
  id: str = None,
  license_type: str = None,
  max_bid_price: typing.Union[int, float] = None,
  patch_mode: str = None,
  plan: WindowsVirtualMachinePlan = None,
  priority: str = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  secret: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]] = None,
  source_image_id: str = None,
  source_image_reference: WindowsVirtualMachineSourceImageReference = None,
  tags: typing.Mapping[str] = None,
  timeouts: WindowsVirtualMachineTimeouts = None,
  timezone: str = None,
  virtual_machine_scale_set_id: str = None,
  winrm_listener: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]] = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalUnattendContent">additional_unattend_content</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.allowExtensionOperations">allow_extension_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.availabilitySetId">availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.computerName">computer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchMode">patch_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.winrmListener">winrm_listener</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additional_unattend_content`<sup>Optional</sup> <a name="additional_unattend_content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalUnattendContent"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `allow_extension_operations`<sup>Optional</sup> <a name="allow_extension_operations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.allowExtensionOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `availability_set_id`<sup>Optional</sup> <a name="availability_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `computer_name`<sup>Optional</sup> <a name="computer_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.computerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `enable_automatic_updates`<sup>Optional</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.enableAutomaticUpdates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.evictionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensions_time_budget`<sup>Optional</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.extensionsTimeBudget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `max_bid_price`<sup>Optional</sup> <a name="max_bid_price" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.maxBidPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `patch_mode`<sup>Optional</sup> <a name="patch_mode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.priority"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisionVmAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `virtual_machine_scale_set_id`<sup>Optional</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `winrm_listener`<sup>Optional</sup> <a name="winrm_listener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.winrmListener"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities">put_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent">put_additional_unattend_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics">put_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk">put_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference">put_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener">put_winrm_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities">reset_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent">reset_additional_unattend_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations">reset_allow_extension_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId">reset_availability_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics">reset_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName">reset_computer_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates">reset_enable_automatic_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy">reset_eviction_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget">reset_extensions_time_budget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice">reset_max_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode">reset_patch_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent">reset_provision_vm_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId">reset_source_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference">reset_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId">reset_virtual_machine_scale_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener">reset_winrm_listener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_capabilities` <a name="put_additional_capabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities"></a>

```python
def put_additional_capabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities.parameter.ultraSsdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

##### `put_additional_unattend_content` <a name="put_additional_unattend_content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent"></a>

```python
def put_additional_unattend_content(
  value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]

---

##### `put_boot_diagnostics` <a name="put_boot_diagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics"></a>

```python
def put_boot_diagnostics(
  storage_account_uri: str
) -> None
```

###### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics.parameter.storageAccountUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

##### `put_os_disk` <a name="put_os_disk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk"></a>

```python
def put_os_disk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: WindowsVirtualMachineOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  name: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

###### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.storageAccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

###### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.diffDiskSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

###### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.diskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

###### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]

---

##### `put_source_image_reference` <a name="put_source_image_reference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference"></a>

```python
def put_source_image_reference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

##### `put_winrm_listener` <a name="put_winrm_listener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener"></a>

```python
def put_winrm_listener(
  value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]

---

##### `reset_additional_capabilities` <a name="reset_additional_capabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities"></a>

```python
def reset_additional_capabilities() -> None
```

##### `reset_additional_unattend_content` <a name="reset_additional_unattend_content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent"></a>

```python
def reset_additional_unattend_content() -> None
```

##### `reset_allow_extension_operations` <a name="reset_allow_extension_operations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations"></a>

```python
def reset_allow_extension_operations() -> None
```

##### `reset_availability_set_id` <a name="reset_availability_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId"></a>

```python
def reset_availability_set_id() -> None
```

##### `reset_boot_diagnostics` <a name="reset_boot_diagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics"></a>

```python
def reset_boot_diagnostics() -> None
```

##### `reset_computer_name` <a name="reset_computer_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName"></a>

```python
def reset_computer_name() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_enable_automatic_updates` <a name="reset_enable_automatic_updates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates"></a>

```python
def reset_enable_automatic_updates() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_eviction_policy` <a name="reset_eviction_policy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy"></a>

```python
def reset_eviction_policy() -> None
```

##### `reset_extensions_time_budget` <a name="reset_extensions_time_budget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget"></a>

```python
def reset_extensions_time_budget() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_max_bid_price` <a name="reset_max_bid_price" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice"></a>

```python
def reset_max_bid_price() -> None
```

##### `reset_patch_mode` <a name="reset_patch_mode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode"></a>

```python
def reset_patch_mode() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_provision_vm_agent` <a name="reset_provision_vm_agent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent"></a>

```python
def reset_provision_vm_agent() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_source_image_id` <a name="reset_source_image_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId"></a>

```python
def reset_source_image_id() -> None
```

##### `reset_source_image_reference` <a name="reset_source_image_reference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference"></a>

```python
def reset_source_image_reference() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_virtual_machine_scale_set_id` <a name="reset_virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId"></a>

```python
def reset_virtual_machine_scale_set_id() -> None
```

##### `reset_winrm_listener` <a name="reset_winrm_listener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener"></a>

```python
def reset_winrm_listener() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WindowsVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent">additional_unattend_content</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses">public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener">winrm_listener</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput">additional_capabilities_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput">additional_unattend_content_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput">allow_extension_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput">availability_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput">boot_diagnostics_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput">computer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput">enable_automatic_updates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput">eviction_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput">extensions_time_budget_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput">max_bid_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput">network_interface_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput">os_disk_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput">patch_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput">provision_vm_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput">source_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput">source_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput">virtual_machine_scale_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput">winrm_listener_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations">allow_extension_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId">availability_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode">patch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_capabilities`<sup>Required</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities"></a>

```python
additional_capabilities: WindowsVirtualMachineAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `additional_unattend_content`<sup>Required</sup> <a name="additional_unattend_content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent"></a>

```python
additional_unattend_content: WindowsVirtualMachineAdditionalUnattendContentList
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a>

---

##### `boot_diagnostics`<sup>Required</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics"></a>

```python
boot_diagnostics: WindowsVirtualMachineBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk"></a>

```python
os_disk: WindowsVirtualMachineOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.plan"></a>

```python
plan: WindowsVirtualMachinePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `public_ip_addresses`<sup>Required</sup> <a name="public_ip_addresses" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses"></a>

```python
public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secret"></a>

```python
secret: WindowsVirtualMachineSecretList
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a>

---

##### `source_image_reference`<sup>Required</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference"></a>

```python
source_image_reference: WindowsVirtualMachineSourceImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts"></a>

```python
timeouts: WindowsVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

##### `winrm_listener`<sup>Required</sup> <a name="winrm_listener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener"></a>

```python
winrm_listener: WindowsVirtualMachineWinrmListenerList
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a>

---

##### `additional_capabilities_input`<sup>Optional</sup> <a name="additional_capabilities_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput"></a>

```python
additional_capabilities_input: WindowsVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `additional_unattend_content_input`<sup>Optional</sup> <a name="additional_unattend_content_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput"></a>

```python
additional_unattend_content_input: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `allow_extension_operations_input`<sup>Optional</sup> <a name="allow_extension_operations_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput"></a>

```python
allow_extension_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_set_id_input`<sup>Optional</sup> <a name="availability_set_id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput"></a>

```python
availability_set_id_input: str
```

- *Type:* str

---

##### `boot_diagnostics_input`<sup>Optional</sup> <a name="boot_diagnostics_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput"></a>

```python
boot_diagnostics_input: WindowsVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `computer_name_input`<sup>Optional</sup> <a name="computer_name_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput"></a>

```python
computer_name_input: str
```

- *Type:* str

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `enable_automatic_updates_input`<sup>Optional</sup> <a name="enable_automatic_updates_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput"></a>

```python
enable_automatic_updates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eviction_policy_input`<sup>Optional</sup> <a name="eviction_policy_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput"></a>

```python
eviction_policy_input: str
```

- *Type:* str

---

##### `extensions_time_budget_input`<sup>Optional</sup> <a name="extensions_time_budget_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput"></a>

```python
extensions_time_budget_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_bid_price_input`<sup>Optional</sup> <a name="max_bid_price_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput"></a>

```python
max_bid_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_ids_input`<sup>Optional</sup> <a name="network_interface_ids_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput"></a>

```python
network_interface_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_disk_input`<sup>Optional</sup> <a name="os_disk_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput"></a>

```python
os_disk_input: WindowsVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `patch_mode_input`<sup>Optional</sup> <a name="patch_mode_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput"></a>

```python
patch_mode_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.planInput"></a>

```python
plan_input: WindowsVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `provision_vm_agent_input`<sup>Optional</sup> <a name="provision_vm_agent_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput"></a>

```python
provision_vm_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `source_image_id_input`<sup>Optional</sup> <a name="source_image_id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput"></a>

```python
source_image_id_input: str
```

- *Type:* str

---

##### `source_image_reference_input`<sup>Optional</sup> <a name="source_image_reference_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput"></a>

```python
source_image_reference_input: WindowsVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WindowsVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `virtual_machine_scale_set_id_input`<sup>Optional</sup> <a name="virtual_machine_scale_set_id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```python
virtual_machine_scale_set_id_input: str
```

- *Type:* str

---

##### `winrm_listener_input`<sup>Optional</sup> <a name="winrm_listener_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput"></a>

```python
winrm_listener_input: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `allow_extension_operations`<sup>Required</sup> <a name="allow_extension_operations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations"></a>

```python
allow_extension_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_set_id`<sup>Required</sup> <a name="availability_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId"></a>

```python
availability_set_id: str
```

- *Type:* str

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `enable_automatic_updates`<sup>Required</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates"></a>

```python
enable_automatic_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eviction_policy`<sup>Required</sup> <a name="eviction_policy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

---

##### `extensions_time_budget`<sup>Required</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget"></a>

```python
extensions_time_budget: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_bid_price`<sup>Required</sup> <a name="max_bid_price" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice"></a>

```python
max_bid_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patch_mode`<sup>Required</sup> <a name="patch_mode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode"></a>

```python
patch_mode: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `provision_vm_agent`<sup>Required</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineAdditionalCapabilities <a name="WindowsVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}. |

---

##### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

### WindowsVirtualMachineAdditionalUnattendContent <a name="WindowsVirtualMachineAdditionalUnattendContent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent(
  content: str,
  setting: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting">setting</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}.

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting"></a>

```python
setting: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}.

---

### WindowsVirtualMachineBootDiagnostics <a name="WindowsVirtualMachineBootDiagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics(
  storage_account_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}. |

---

##### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

### WindowsVirtualMachineConfig <a name="WindowsVirtualMachineConfig" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_password: str,
  admin_username: str,
  location: str,
  name: str,
  network_interface_ids: typing.List[str],
  os_disk: WindowsVirtualMachineOsDisk,
  resource_group_name: str,
  size: str,
  additional_capabilities: WindowsVirtualMachineAdditionalCapabilities = None,
  additional_unattend_content: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]] = None,
  allow_extension_operations: typing.Union[bool, IResolvable] = None,
  availability_set_id: str = None,
  boot_diagnostics: WindowsVirtualMachineBootDiagnostics = None,
  computer_name: str = None,
  custom_data: str = None,
  enable_automatic_updates: typing.Union[bool, IResolvable] = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  eviction_policy: str = None,
  extensions_time_budget: str = None,
  id: str = None,
  license_type: str = None,
  max_bid_price: typing.Union[int, float] = None,
  patch_mode: str = None,
  plan: WindowsVirtualMachinePlan = None,
  priority: str = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  secret: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]] = None,
  source_image_id: str = None,
  source_image_reference: WindowsVirtualMachineSourceImageReference = None,
  tags: typing.Mapping[str] = None,
  timeouts: WindowsVirtualMachineTimeouts = None,
  timezone: str = None,
  virtual_machine_scale_set_id: str = None,
  winrm_listener: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent">additional_unattend_content</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]</code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations">allow_extension_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId">availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName">computer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates">enable_automatic_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode">patch_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener">winrm_listener</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]</code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk"></a>

```python
os_disk: WindowsVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities"></a>

```python
additional_capabilities: WindowsVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additional_unattend_content`<sup>Optional</sup> <a name="additional_unattend_content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent"></a>

```python
additional_unattend_content: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `allow_extension_operations`<sup>Optional</sup> <a name="allow_extension_operations" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations"></a>

```python
allow_extension_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `availability_set_id`<sup>Optional</sup> <a name="availability_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId"></a>

```python
availability_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics"></a>

```python
boot_diagnostics: WindowsVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `computer_name`<sup>Optional</sup> <a name="computer_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `enable_automatic_updates`<sup>Optional</sup> <a name="enable_automatic_updates" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates"></a>

```python
enable_automatic_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensions_time_budget`<sup>Optional</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget"></a>

```python
extensions_time_budget: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `max_bid_price`<sup>Optional</sup> <a name="max_bid_price" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice"></a>

```python
max_bid_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `patch_mode`<sup>Optional</sup> <a name="patch_mode" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode"></a>

```python
patch_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan"></a>

```python
plan: WindowsVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference"></a>

```python
source_image_reference: WindowsVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts"></a>

```python
timeouts: WindowsVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `virtual_machine_scale_set_id`<sup>Optional</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `winrm_listener`<sup>Optional</sup> <a name="winrm_listener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener"></a>

```python
winrm_listener: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

### WindowsVirtualMachineOsDisk <a name="WindowsVirtualMachineOsDisk" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineOsDisk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: WindowsVirtualMachineOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  name: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

##### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings"></a>

```python
diff_disk_settings: WindowsVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

### WindowsVirtualMachineOsDiskDiffDiskSettings <a name="WindowsVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings(
  option: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```python
option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

### WindowsVirtualMachinePlan <a name="WindowsVirtualMachinePlan" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachinePlan(
  name: str,
  product: str,
  publisher: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

### WindowsVirtualMachineSecret <a name="WindowsVirtualMachineSecret" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecret(
  certificate: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecretCertificate]],
  key_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#certificate WindowsVirtualMachine#certificate}

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}.

---

### WindowsVirtualMachineSecretCertificate <a name="WindowsVirtualMachineSecretCertificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecretCertificate(
  store: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store">store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}. |

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store"></a>

```python
store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}.

---

### WindowsVirtualMachineSourceImageReference <a name="WindowsVirtualMachineSourceImageReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSourceImageReference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

### WindowsVirtualMachineTimeouts <a name="WindowsVirtualMachineTimeouts" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

### WindowsVirtualMachineWinrmListener <a name="WindowsVirtualMachineWinrmListener" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineWinrmListener(
  protocol: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">reset_ultra_ssd_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ultra_ssd_enabled` <a name="reset_ultra_ssd_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```python
def reset_ultra_ssd_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultra_ssd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ultra_ssd_enabled_input`<sup>Optional</sup> <a name="ultra_ssd_enabled_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```python
ultra_ssd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---


### WindowsVirtualMachineAdditionalUnattendContentList <a name="WindowsVirtualMachineAdditionalUnattendContentList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsVirtualMachineAdditionalUnattendContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineAdditionalUnattendContent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]]

---


### WindowsVirtualMachineAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput">setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting">setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `setting_input`<sup>Optional</sup> <a name="setting_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput"></a>

```python
setting_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting"></a>

```python
setting: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WindowsVirtualMachineAdditionalUnattendContent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>]

---


### WindowsVirtualMachineBootDiagnosticsOutputReference <a name="WindowsVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storage_account_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_account_uri_input`<sup>Optional</sup> <a name="storage_account_uri_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```python
storage_account_uri_input: str
```

- *Type:* str

---

##### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---


### WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```python
option_input: str
```

- *Type:* str

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```python
option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineOsDiskOutputReference <a name="WindowsVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings">put_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">reset_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_diff_disk_settings` <a name="put_diff_disk_settings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```python
def put_diff_disk_settings(
  option: str
) -> None
```

###### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.option"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

##### `reset_diff_disk_settings` <a name="reset_diff_disk_settings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```python
def reset_diff_disk_settings() -> None
```

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diff_disk_settings_input</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diff_disk_settings`<sup>Required</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```python
diff_disk_settings: WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `diff_disk_settings_input`<sup>Optional</sup> <a name="diff_disk_settings_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```python
diff_disk_settings_input: WindowsVirtualMachineOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachineOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---


### WindowsVirtualMachinePlanOutputReference <a name="WindowsVirtualMachinePlanOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---


### WindowsVirtualMachineSecretCertificateList <a name="WindowsVirtualMachineSecretCertificateList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsVirtualMachineSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]

---


### WindowsVirtualMachineSecretCertificateOutputReference <a name="WindowsVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput">store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store">store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `store_input`<sup>Optional</sup> <a name="store_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput"></a>

```python
store_input: str
```

- *Type:* str

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store"></a>

```python
store: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WindowsVirtualMachineSecretCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]

---


### WindowsVirtualMachineSecretList <a name="WindowsVirtualMachineSecretList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsVirtualMachineSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]]

---


### WindowsVirtualMachineSecretOutputReference <a name="WindowsVirtualMachineSecretOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate">put_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecretCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate"></a>

```python
certificate: WindowsVirtualMachineSecretCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[WindowsVirtualMachineSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>]]

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WindowsVirtualMachineSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>]

---


### WindowsVirtualMachineSourceImageReferenceOutputReference <a name="WindowsVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: WindowsVirtualMachineSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---


### WindowsVirtualMachineTimeoutsOutputReference <a name="WindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WindowsVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>]

---


### WindowsVirtualMachineWinrmListenerList <a name="WindowsVirtualMachineWinrmListenerList" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsVirtualMachineWinrmListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsVirtualMachineWinrmListener]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]]

---


### WindowsVirtualMachineWinrmListenerOutputReference <a name="WindowsVirtualMachineWinrmListenerOutputReference" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import windows_virtual_machine

windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WindowsVirtualMachineWinrmListener]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurestack.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>]

---



