# `dataAzurestackStorageAccount` Submodule <a name="`dataAzurestackStorageAccount` Submodule" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackStorageAccount <a name="DataAzurestackStorageAccount" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account azurestack_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccount(
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
  timeouts: DataAzurestackStorageAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#name DataAzurestackStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#resource_group_name DataAzurestackStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#id DataAzurestackStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#name DataAzurestackStorageAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#resource_group_name DataAzurestackStorageAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#id DataAzurestackStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#timeouts DataAzurestackStorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#read DataAzurestackStorageAccount#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccount.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountEncryptionSource">account_encryption_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountKind">account_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountReplicationType">account_replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountTier">account_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList">DataAzurestackStorageAccountCustomDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.enableBlobEncryption">enable_blob_encryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.httpsTrafficOnlyEnabled">https_traffic_only_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryBlobConnectionString">primary_blob_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryBlobEndpoint">primary_blob_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryFileEndpoint">primary_file_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryLocation">primary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryQueueEndpoint">primary_queue_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryTableEndpoint">primary_table_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryBlobConnectionString">secondary_blob_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryBlobEndpoint">secondary_blob_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryLocation">secondary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryQueueEndpoint">secondary_queue_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryTableEndpoint">secondary_table_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference">DataAzurestackStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_encryption_source`<sup>Required</sup> <a name="account_encryption_source" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountEncryptionSource"></a>

```python
account_encryption_source: str
```

- *Type:* str

---

##### `account_kind`<sup>Required</sup> <a name="account_kind" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountKind"></a>

```python
account_kind: str
```

- *Type:* str

---

##### `account_replication_type`<sup>Required</sup> <a name="account_replication_type" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountReplicationType"></a>

```python
account_replication_type: str
```

- *Type:* str

---

##### `account_tier`<sup>Required</sup> <a name="account_tier" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.accountTier"></a>

```python
account_tier: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.customDomain"></a>

```python
custom_domain: DataAzurestackStorageAccountCustomDomainList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList">DataAzurestackStorageAccountCustomDomainList</a>

---

##### `enable_blob_encryption`<sup>Required</sup> <a name="enable_blob_encryption" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.enableBlobEncryption"></a>

```python
enable_blob_encryption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `https_traffic_only_enabled`<sup>Required</sup> <a name="https_traffic_only_enabled" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.httpsTrafficOnlyEnabled"></a>

```python
https_traffic_only_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_blob_connection_string`<sup>Required</sup> <a name="primary_blob_connection_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryBlobConnectionString"></a>

```python
primary_blob_connection_string: str
```

- *Type:* str

---

##### `primary_blob_endpoint`<sup>Required</sup> <a name="primary_blob_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryBlobEndpoint"></a>

```python
primary_blob_endpoint: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_file_endpoint`<sup>Required</sup> <a name="primary_file_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryFileEndpoint"></a>

```python
primary_file_endpoint: str
```

- *Type:* str

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

---

##### `primary_queue_endpoint`<sup>Required</sup> <a name="primary_queue_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryQueueEndpoint"></a>

```python
primary_queue_endpoint: str
```

- *Type:* str

---

##### `primary_table_endpoint`<sup>Required</sup> <a name="primary_table_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.primaryTableEndpoint"></a>

```python
primary_table_endpoint: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_blob_connection_string`<sup>Required</sup> <a name="secondary_blob_connection_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryBlobConnectionString"></a>

```python
secondary_blob_connection_string: str
```

- *Type:* str

---

##### `secondary_blob_endpoint`<sup>Required</sup> <a name="secondary_blob_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryBlobEndpoint"></a>

```python
secondary_blob_endpoint: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_location`<sup>Required</sup> <a name="secondary_location" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryLocation"></a>

```python
secondary_location: str
```

- *Type:* str

---

##### `secondary_queue_endpoint`<sup>Required</sup> <a name="secondary_queue_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryQueueEndpoint"></a>

```python
secondary_queue_endpoint: str
```

- *Type:* str

---

##### `secondary_table_endpoint`<sup>Required</sup> <a name="secondary_table_endpoint" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.secondaryTableEndpoint"></a>

```python
secondary_table_endpoint: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.timeouts"></a>

```python
timeouts: DataAzurestackStorageAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference">DataAzurestackStorageAccountTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackStorageAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackStorageAccountConfig <a name="DataAzurestackStorageAccountConfig" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig(
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
  timeouts: DataAzurestackStorageAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#name DataAzurestackStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#resource_group_name DataAzurestackStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#id DataAzurestackStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#name DataAzurestackStorageAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#resource_group_name DataAzurestackStorageAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#id DataAzurestackStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackStorageAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#timeouts DataAzurestackStorageAccount#timeouts}

---

### DataAzurestackStorageAccountCustomDomain <a name="DataAzurestackStorageAccountCustomDomain" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomain()
```


### DataAzurestackStorageAccountTimeouts <a name="DataAzurestackStorageAccountTimeouts" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#read DataAzurestackStorageAccount#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/storage_account#read DataAzurestackStorageAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackStorageAccountCustomDomainList <a name="DataAzurestackStorageAccountCustomDomainList" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurestackStorageAccountCustomDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurestackStorageAccountCustomDomainOutputReference <a name="DataAzurestackStorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomain">DataAzurestackStorageAccountCustomDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomainOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurestackStorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountCustomDomain">DataAzurestackStorageAccountCustomDomain</a>

---


### DataAzurestackStorageAccountTimeoutsOutputReference <a name="DataAzurestackStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_storage_account

dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackStorageAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackStorageAccount.DataAzurestackStorageAccountTimeouts">DataAzurestackStorageAccountTimeouts</a>, cdktf.IResolvable]

---



