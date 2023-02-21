# `dataAzurestackLbBackendAddressPool` Submodule <a name="`dataAzurestackLbBackendAddressPool` Submodule" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackLbBackendAddressPool <a name="DataAzurestackLbBackendAddressPool" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool azurestack_lb_backend_address_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurestackLbBackendAddressPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#loadbalancer_id DataAzurestackLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#name DataAzurestackLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#id DataAzurestackLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#loadbalancer_id DataAzurestackLbBackendAddressPool#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#name DataAzurestackLbBackendAddressPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#id DataAzurestackLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#timeouts DataAzurestackLbBackendAddressPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#read DataAzurestackLbBackendAddressPool#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.backendIpConfigurations">backend_ip_configurations</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList">DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadBalancingRules">load_balancing_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference">DataAzurestackLbBackendAddressPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backend_ip_configurations`<sup>Required</sup> <a name="backend_ip_configurations" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.backendIpConfigurations"></a>

```python
backend_ip_configurations: DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList">DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList</a>

---

##### `load_balancing_rules`<sup>Required</sup> <a name="load_balancing_rules" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadBalancingRules"></a>

```python
load_balancing_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.timeouts"></a>

```python
timeouts: DataAzurestackLbBackendAddressPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference">DataAzurestackLbBackendAddressPoolTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurestackLbBackendAddressPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackLbBackendAddressPoolBackendIpConfigurations <a name="DataAzurestackLbBackendAddressPoolBackendIpConfigurations" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurations()
```


### DataAzurestackLbBackendAddressPoolConfig <a name="DataAzurestackLbBackendAddressPoolConfig" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurestackLbBackendAddressPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#loadbalancer_id DataAzurestackLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#name DataAzurestackLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#id DataAzurestackLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#loadbalancer_id DataAzurestackLbBackendAddressPool#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#name DataAzurestackLbBackendAddressPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#id DataAzurestackLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolConfig.property.timeouts"></a>

```python
timeouts: DataAzurestackLbBackendAddressPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#timeouts DataAzurestackLbBackendAddressPool#timeouts}

---

### DataAzurestackLbBackendAddressPoolTimeouts <a name="DataAzurestackLbBackendAddressPoolTimeouts" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#read DataAzurestackLbBackendAddressPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/lb_backend_address_pool#read DataAzurestackLbBackendAddressPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList <a name="DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference <a name="DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurations">DataAzurestackLbBackendAddressPoolBackendIpConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurestackLbBackendAddressPoolBackendIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolBackendIpConfigurations">DataAzurestackLbBackendAddressPoolBackendIpConfigurations</a>

---


### DataAzurestackLbBackendAddressPoolTimeoutsOutputReference <a name="DataAzurestackLbBackendAddressPoolTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurestack import data_azurestack_lb_backend_address_pool

dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurestackLbBackendAddressPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurestack.dataAzurestackLbBackendAddressPool.DataAzurestackLbBackendAddressPoolTimeouts">DataAzurestackLbBackendAddressPoolTimeouts</a>, cdktf.IResolvable]

---



