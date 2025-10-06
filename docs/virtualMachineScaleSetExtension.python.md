# `virtualMachineScaleSetExtension` Submodule <a name="`virtualMachineScaleSetExtension` Submodule" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetExtensionA <a name="VirtualMachineScaleSetExtensionA" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension azurestack_virtual_machine_scale_set_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  publisher: str,
  type: str,
  type_handler_version: str,
  virtual_machine_scale_set_id: str,
  auto_upgrade_minor_version: bool | IResolvable = None,
  force_update_tag: str = None,
  id: str = None,
  protected_settings: str = None,
  settings: str = None,
  timeouts: VirtualMachineScaleSetExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.typeHandlerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.autoUpgradeMinorVersion"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.forceUpdateTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.protectedSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.settings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion">reset_auto_upgrade_minor_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag">reset_force_update_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}.

---

##### `reset_auto_upgrade_minor_version` <a name="reset_auto_upgrade_minor_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetAutoUpgradeMinorVersion"></a>

```python
def reset_auto_upgrade_minor_version() -> None
```

##### `reset_force_update_tag` <a name="reset_force_update_tag" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetForceUpdateTag"></a>

```python
def reset_force_update_tag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSetExtensionA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineScaleSetExtensionA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineScaleSetExtensionA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineScaleSetExtensionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetExtensionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput">auto_upgrade_minor_version_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput">force_update_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput">protected_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput">type_handler_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput">virtual_machine_scale_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeouts"></a>

```python
timeouts: VirtualMachineScaleSetExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference">VirtualMachineScaleSetExtensionTimeoutsOutputReference</a>

---

##### `auto_upgrade_minor_version_input`<sup>Optional</sup> <a name="auto_upgrade_minor_version_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersionInput"></a>

```python
auto_upgrade_minor_version_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_update_tag_input`<sup>Optional</sup> <a name="force_update_tag_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTagInput"></a>

```python
force_update_tag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettingsInput"></a>

```python
protected_settings_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VirtualMachineScaleSetExtensionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---

##### `type_handler_version_input`<sup>Optional</sup> <a name="type_handler_version_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersionInput"></a>

```python
type_handler_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_machine_scale_set_id_input`<sup>Optional</sup> <a name="virtual_machine_scale_set_id_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetIdInput"></a>

```python
virtual_machine_scale_set_id_input: str
```

- *Type:* str

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_update_tag`<sup>Required</sup> <a name="force_update_tag" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetExtensionAConfig <a name="VirtualMachineScaleSetExtensionAConfig" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  publisher: str,
  type: str,
  type_handler_version: str,
  virtual_machine_scale_set_id: str,
  auto_upgrade_minor_version: bool | IResolvable = None,
  force_update_tag: str = None,
  id: str = None,
  protected_settings: str = None,
  settings: str = None,
  timeouts: VirtualMachineScaleSetExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId">virtual_machine_scale_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}.

---

##### `virtual_machine_scale_set_id`<sup>Required</sup> <a name="virtual_machine_scale_set_id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.virtualMachineScaleSetId"></a>

```python
virtual_machine_scale_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}.

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.settings"></a>

```python
settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionAConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineScaleSetExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}

---

### VirtualMachineScaleSetExtensionTimeouts <a name="VirtualMachineScaleSetExtensionTimeouts" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurestack/1.0.0/docs/resources/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetExtensionTimeoutsOutputReference <a name="VirtualMachineScaleSetExtensionTimeoutsOutputReference" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import virtual_machine_scale_set_extension

virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VirtualMachineScaleSetExtensionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurestack.virtualMachineScaleSetExtension.VirtualMachineScaleSetExtensionTimeouts">VirtualMachineScaleSetExtensionTimeouts</a>

---



