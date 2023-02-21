# `dataAzurestackLocalNetworkGateway` Submodule <a name="`dataAzurestackLocalNetworkGateway` Submodule" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackLocalNetworkGateway <a name="DataAzurestackLocalNetworkGateway" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway azurestack_local_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway(
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
  timeouts: DataAzurestackLocalNetworkGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#name DataAzurestackLocalNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#resource_group_name DataAzurestackLocalNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#id DataAzurestackLocalNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#name DataAzurestackLocalNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#resource_group_name DataAzurestackLocalNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#id DataAzurestackLocalNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#timeouts DataAzurestackLocalNetworkGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#read DataAzurestackLocalNetworkGateway#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList">DataAzurestackLocalNetworkGatewayBgpSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.gatewayAddress">gateway_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference">DataAzurestackLocalNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bgp_settings`<sup>Required</sup> <a name="bgp_settings" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.bgpSettings"></a>

```python
bgp_settings: DataAzurestackLocalNetworkGatewayBgpSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList">DataAzurestackLocalNetworkGatewayBgpSettingsList</a>

---

##### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.gatewayAddress"></a>

```python
gateway_address: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.timeouts"></a>

```python
timeouts: DataAzurestackLocalNetworkGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference">DataAzurestackLocalNetworkGatewayTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackLocalNetworkGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackLocalNetworkGatewayBgpSettings <a name="DataAzurestackLocalNetworkGatewayBgpSettings" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettings()
```


### DataAzurestackLocalNetworkGatewayConfig <a name="DataAzurestackLocalNetworkGatewayConfig" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig(
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
  timeouts: DataAzurestackLocalNetworkGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#name DataAzurestackLocalNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#resource_group_name DataAzurestackLocalNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#id DataAzurestackLocalNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#name DataAzurestackLocalNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#resource_group_name DataAzurestackLocalNetworkGateway#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#id DataAzurestackLocalNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackLocalNetworkGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#timeouts DataAzurestackLocalNetworkGateway#timeouts}

---

### DataAzurestackLocalNetworkGatewayTimeouts <a name="DataAzurestackLocalNetworkGatewayTimeouts" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#read DataAzurestackLocalNetworkGateway#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/local_network_gateway#read DataAzurestackLocalNetworkGateway#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackLocalNetworkGatewayBgpSettingsList <a name="DataAzurestackLocalNetworkGatewayBgpSettingsList" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference <a name="DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">bgp_peering_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettings">DataAzurestackLocalNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_peering_address`<sup>Required</sup> <a name="bgp_peering_address" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```python
bgp_peering_address: str
```

- *Type:* str

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurestackLocalNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayBgpSettings">DataAzurestackLocalNetworkGatewayBgpSettings</a>

---


### DataAzurestackLocalNetworkGatewayTimeoutsOutputReference <a name="DataAzurestackLocalNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_local_network_gateway

dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackLocalNetworkGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLocalNetworkGateway.DataAzurestackLocalNetworkGatewayTimeouts">DataAzurestackLocalNetworkGatewayTimeouts</a>, cdktf.IResolvable]

---



