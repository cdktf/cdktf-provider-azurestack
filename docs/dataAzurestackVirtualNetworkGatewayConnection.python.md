# `dataAzurestackVirtualNetworkGatewayConnection` Submodule <a name="`dataAzurestackVirtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackVirtualNetworkGatewayConnection <a name="DataAzurestackVirtualNetworkGatewayConnection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurestackVirtualNetworkGatewayConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey">authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred">egress_bytes_transferred</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp">enable_bgp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId">express_route_circuit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred">ingress_bytes_transferred</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId">local_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">peer_virtual_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid">resource_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight">routing_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">use_policy_based_traffic_selectors</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorization_key`<sup>Required</sup> <a name="authorization_key" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

---

##### `egress_bytes_transferred`<sup>Required</sup> <a name="egress_bytes_transferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred"></a>

```python
egress_bytes_transferred: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_bgp`<sup>Required</sup> <a name="enable_bgp" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp"></a>

```python
enable_bgp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `express_route_circuit_id`<sup>Required</sup> <a name="express_route_circuit_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```python
express_route_circuit_id: str
```

- *Type:* str

---

##### `ingress_bytes_transferred`<sup>Required</sup> <a name="ingress_bytes_transferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred"></a>

```python
ingress_bytes_transferred: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipsec_policy`<sup>Required</sup> <a name="ipsec_policy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```python
ipsec_policy: DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a>

---

##### `local_network_gateway_id`<sup>Required</sup> <a name="local_network_gateway_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```python
local_network_gateway_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `peer_virtual_network_gateway_id`<sup>Required</sup> <a name="peer_virtual_network_gateway_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```python
peer_virtual_network_gateway_id: str
```

- *Type:* str

---

##### `resource_guid`<sup>Required</sup> <a name="resource_guid" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid"></a>

```python
resource_guid: str
```

- *Type:* str

---

##### `routing_weight`<sup>Required</sup> <a name="routing_weight" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight"></a>

```python
routing_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts"></a>

```python
timeouts: DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_policy_based_traffic_selectors`<sup>Required</sup> <a name="use_policy_based_traffic_selectors" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```python
use_policy_based_traffic_selectors: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```python
virtual_network_gateway_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackVirtualNetworkGatewayConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackVirtualNetworkGatewayConnectionConfig <a name="DataAzurestackVirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurestackVirtualNetworkGatewayConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackVirtualNetworkGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}

---

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy()
```


### DataAzurestackVirtualNetworkGatewayConnectionTimeouts <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">pfs_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">sa_datasize</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">sa_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

---

##### `sa_datasize`<sup>Required</sup> <a name="sa_datasize" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```python
sa_datasize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime`<sup>Required</sup> <a name="sa_lifetime" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```python
sa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_virtual_network_gateway_connection

dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackVirtualNetworkGatewayConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]

---



